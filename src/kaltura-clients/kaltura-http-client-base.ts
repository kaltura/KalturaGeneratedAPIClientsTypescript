import { CancelableAction } from "../utils/cancelable-action";
import { KalturaClientBase, KalturaClientBaseConfiguration } from "./kaltura-client-base";

export interface KalturaHttpClientBaseConfiguration extends KalturaClientBaseConfiguration {
  endpointUrl: string;
}

interface KalturaFileUploadParams {
  apiVersion: string;
  clientTag: string;
  finalChunk: boolean;
  format: number;
  ks: string;
  partnerId: number;
  resume: boolean;
  resumeAt: number;
  uploadTokenId: string;
  service?: string;
  action?: string;
}

export abstract class KalturaHttpClientBase extends KalturaClientBase {

  public endpointUrl: string;


  constructor(config: KalturaHttpClientBaseConfiguration) {
    super(config);

    if (!config || !config.endpointUrl) {
      throw new Error("invalid config, missing endpoint url value");
    }

    this.endpointUrl = config.endpointUrl;
  }

  private _getHeaders(): any {
    return {
      "Accept": "application/json",
      "Content-Type": "application/json"
    };
  }

  private _chunkUpload(data: FormData,
                       parameters: KalturaFileUploadParams,
                       stateChangeHandler: (xhr: XMLHttpRequest) => void,
                       progressCallbackHandler: (e: Event) => void): XMLHttpRequest {
    const uploadParams = Object.assign({}, parameters);
    const { service, action } = uploadParams;
    delete uploadParams.service;
    delete uploadParams.action;

    // build endpoint
    const querystring = this._buildQuerystring(uploadParams);
    const endpoint = `${this.endpointUrl}/service/${service}/action/${action}?${querystring}`;
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      stateChangeHandler(xhr);
    };

    if (progressCallbackHandler) {
      xhr.upload.addEventListener("progress", function (e) {
        if (e.lengthComputable) {
          progressCallbackHandler(e);
        } else {
          // Unable to compute progress information since the total size is unknown
        }
      }, false);
    }

    xhr.open("POST", endpoint);
    xhr.send(data);

    return xhr;
  }

  protected _transmitFileUploadRequest(request): CancelableAction {
    return new CancelableAction((resolve, reject) => {
      const file = request.getFileData();

      if (!file) {
        reject(new Error("No file to upload"));
      }

      const parameters: KalturaFileUploadParams = Object.assign({ format: 1 }, request.toRequestObject());
      this._assignDefaultParameters(parameters);

      const chunkSize = 5e6; // 5mb
      const fileSize = file.size;

      let data;
      let start = 0;
      let end = chunkSize;
      let isComplete = false;

      let xhr;

      const progressCallback = request._getProgressCallback();
      const getProgressCallbackHandler = (loaded: number) => {
        return (e) => {
          // TODO [kmcng] calculate correct progress
          console.warn(Math.floor(e.loaded / e.total * chunkSize) + loaded);
          progressCallback.apply(request, [Math.floor(e.loaded / e.total * chunkSize) + loaded, fileSize]);
        };
      };
      const xhrStateChangeHandler = (request) => {
        if (request.readyState === 4) {
          let resp;

          try {
            if (request.status === 200) {
              resp = JSON.parse(request.response);
            } else {
              resp = new Error(request.responseText);
            }
          } catch (e) {
            resp = new Error(request.responseText);
          }

          if (resp instanceof Error) {
            reject(resp);
          } else {
            if (!parameters.finalChunk) {
              start += Number(resp.uploadedFileSize);

              parameters.finalChunk = (fileSize - start) <= chunkSize;
              parameters.resumeAt = start;

              end = parameters.finalChunk ? fileSize : start + chunkSize;

              data = new FormData();
              data.append("fileName", file.name);
              data.append("fileData", file.slice(start, end, file.type), file.name);

              // TODO [kmcng] might not be needed
              data.append("resumeAt", parameters.resumeAt);
              data.append("uploadTokenId", parameters.ks);
              data.append("finalChunk", Number(parameters.finalChunk));

              xhr = this._chunkUpload(data, parameters, xhrStateChangeHandler, getProgressCallbackHandler(start));
            } else {
              resolve(resp);
            }
          }
        }
      };

      parameters.finalChunk = fileSize <= chunkSize;
      parameters.resumeAt = 0;

      const fileData = fileSize > chunkSize ? file.slice(start, end, file.type) : file;
      data = new FormData();
      data.append("fileData", fileData, file.name);
      data.append("fileName", file.name);

      // TODO [kmcng] might not be needed
      data.append("resumeAt", parameters.resumeAt);
      data.append("uploadTokenId", parameters.ks);
      data.append("finalChunk", Number(parameters.finalChunk));

      xhr = this._chunkUpload(data, parameters, xhrStateChangeHandler, getProgressCallbackHandler(start));

      return () => {
        if (!isComplete) {
          xhr.abort();
          isComplete = true;
        }
      };
    });
  }

  protected abstract _createCancelableAction(data: { endpoint: string, headers: any, body: {} }): CancelableAction;


  protected _transmitRequest(request): CancelableAction {


    const parameters: any = Object.assign(
      {
        format: 1
      },
      request.toRequestObject()
    );

    this._assignDefaultParameters(parameters);

    // build endpoint
    const endpoint = `${this.endpointUrl}/service/${parameters.service}/action/${parameters.action}`;

    delete parameters.service;
    delete parameters.action;

    const headers = this._getHeaders();

    return this._createCancelableAction({ endpoint, headers, body: parameters });
  }

  private _buildQuerystring(data: {}, prefix?: string) {
    let str = [], p;
    for (p in data) {
      if (data.hasOwnProperty(p)) {
        let k = prefix ? prefix + "[" + p + "]" : p, v = data[p];
        str.push((v !== null && typeof v === "object") ?
          this._buildQuerystring(v, k) :
          encodeURIComponent(k) + "=" + encodeURIComponent(v));
      }
    }
    return str.join("&");

  }
}
