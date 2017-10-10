import { CancelableAction } from "../utils/cancelable-action";
import { KalturaClientBase, KalturaClientBaseConfiguration } from "./kaltura-client-base";
import { KalturaRequestBase } from '../kaltura-request-base';

export interface KalturaHttpClientBaseConfiguration extends KalturaClientBaseConfiguration {
  endpointUrl: string;
}

interface ChunkData {
  resume: number;
  resumeAt: number;
  finalChunk: boolean;
}

export abstract class KalturaHttpClientBase extends KalturaClientBase {
  //private _retryUploadData: RetryUploadData = {};

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

  // private _chunkUpload(request: KalturaRequestBase, resume, resumeAt, finalChunk,
  //                      stateChangeHandler: (xhr: XMLHttpRequest) => void,
  //                      progressCallbackHandler: (e: Event) => void): XMLHttpRequest {
  //
  //   const parameters: any = Object.assign({ format: 1 }, request.toRequestObject());
  //   this._assignDefaultParameters(parameters);
  //
  //   const { service, action } = parameters;
  //   delete parameters.service;
  //   delete parameters.action;
  //
  //   // build endpoint
  //   const querystring = this._buildQuerystring(parameters);
  //   const endpoint = `${this.endpointUrl}/service/${service}/action/${action}?${querystring}`;
  //   const xhr = new XMLHttpRequest();
  //
  //   xhr.onreadystatechange = function () {
  //     stateChangeHandler(xhr);
  //   };
  //
  //   if (progressCallbackHandler) {
  //     xhr.upload.addEventListener("progress", function (e) {
  //       if (e.lengthComputable) {
  //         progressCallbackHandler(e);
  //       } else {
  //         // Unable to compute progress information since the total size is unknown
  //       }
  //     }, false);
  //   }
  //
  //   xhr.open("POST", endpoint);
  //   xhr.send(data);
  //
  //   return xhr;
  // }


    protected _transmitFileUploadRequest(request): CancelableAction {

        return new CancelableAction((resolve, reject) => {
            const data: ChunkData = { resume : 0, resumeAt: 0, finalChunk : false};

            let chunkUploadRequest = this._chunkUpload2(request, data)
                .then(
                    response =>
                    {
                        chunkUploadRequest = null;

                        if (data.finalChunk)
                        {
                            resolve(response);
                        }else {
                            chunkUploadRequest = this._chunkUpload2(request, data);
                        }
                    }, reason => {
                        chunkUploadRequest = null;
                        reject(reason);

                    });

            return () =>
            {
                if (chunkUploadRequest) {
                    chunkUploadRequest.cancel();
                }
            }
        });
    }

    private _chunkUpload2(request, uploadChunkData: ChunkData): CancelableAction {

        return new CancelableAction((resolve, reject) => {
            let isComplete = false;
            const parameters: any = Object.assign(
                {
                    format: 1
                },
                request.toRequestObject()
            );

            this._assignDefaultParameters(parameters);

            // add any data needed for the chunk support
            uploadChunkData.resumeAt = 100;


            const data: any = request.getFormData();

            const {service, action} = parameters;
            delete parameters.service;
            delete parameters.action;

            // build endpoint
            const querystring = this._buildQuerystring(parameters);
            const endpoint = `${this.endpointUrl}/service/${service}/action/${action}?${querystring}`;

            const xhr = new XMLHttpRequest();

            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    let resp;

                    try {
                        if (xhr.status == 200) {
                            resp = JSON.parse(xhr.response);
                        } else {
                            resp = new Error(xhr.responseText);
                        }
                    } catch (e) {
                        resp = new Error(xhr.responseText);
                    }

                    if (resp instanceof Error) {
                        reject(resp);
                    } else {
                        resolve(resp);
                    }
                }
            };

            const progressCallback = request._getProgressCallback();
            if (progressCallback) {
                xhr.upload.addEventListener('progress', function (e) {
                    if (e.lengthComputable) {
                        progressCallback.apply(request, [e.loaded, e.total]);
                    } else {
                        // Unable to compute progress information since the total size is unknown
                    }
                }, false);
            }

            xhr.open('POST', endpoint);
            xhr.send(data);

            return () => {
                if (!isComplete) {
                    xhr.abort();
                    isComplete = true;
                }
            }
        });
    }


  // protected _transmitFileUploadRequest(request): CancelableAction {
  //   console.warn(this._retryUploadData);
  //   return new CancelableAction((resolve, reject) => {
  //     const file = request.getFileData();
  //
  //     if (!file) {
  //       reject(new Error("No file to upload"));
  //     }
  //
  //     const chunkSize = 5e6; // 5mb
  //     const fileSize = file.size;
  //
  //     let data;
  //     let start = 0;
  //     let end = chunkSize;
  //     let finalChunk = false;
  //     let resumeAt = 0;
  //
  //     let isComplete = false;
  //
  //     let xhr;
  //
  //     const progressCallback = request._getProgressCallback();
  //     const getProgressCallbackHandler = (loaded: number, finalChunk = false) => {
  //       return (e) => {
  //         const chunk = finalChunk ? fileSize - loaded : chunkSize;
  //         progressCallback.apply(request, [Math.floor(e.loaded / e.total * chunk) + loaded, fileSize]);
  //       };
  //     };
  //     const xhrStateChangeHandler = (xhrRequest) => {
  //       if (xhrRequest.readyState === 4) {
  //         let resp;
  //
  //         try {
  //           if (xhrRequest.status === 200) {
  //             resp = JSON.parse(xhrRequest.response);
  //           } else {
  //             resp = new Error(xhrRequest.responseText);
  //           }
  //         } catch (e) {
  //           resp = new Error(xhrRequest.responseText);
  //         }
  //
  //         if (resp instanceof Error) {
  //           reject(resp);
  //         } else {
  //           if (!parameters.finalChunk) {
  //             start = Number(resp.uploadedFileSize);
  //             this._retryUploadData[parameters.uploadTokenId] = { resumeAt: start };
  //
  //             parameters.finalChunk = (fileSize - start) <= chunkSize;
  //             parameters.resumeAt = start;
  //             parameters.resume = true;
  //
  //             end = parameters.finalChunk ? fileSize : start + chunkSize;
  //
  //             data = new FormData();
  //             data.append("fileName", file.name);
  //             data.append("fileData", file.slice(start, end, file.type), file.name);
  //
  //             xhr = this._chunkUpload(data, parameters, xhrStateChangeHandler, getProgressCallbackHandler(start, parameters.finalChunk));
  //           } else {
  //             delete this._retryUploadData[parameters.uploadTokenId];
  //             resolve(resp);
  //           }
  //         }
  //       }
  //     };
  //
  //     // if (this._retryUploadData[parameters.uploadTokenId]) {
  //     //   parameters.resumeAt = this._retryUploadData[parameters.uploadTokenId].resumeAt;
  //     //   parameters.resume = parameters.resumeAt > 0;
  //     //   parameters.finalChunk = (fileSize - parameters.resumeAt) <= chunkSize;
  //     //   start = parameters.resumeAt;
  //     //   end = parameters.finalChunk ? fileSize : start + chunkSize;
  //     //   console.log(`log: [info] [kaltura-http-client-base]: Upload token has found (${parameters.uploadTokenId}), resume upload from: ${start}`);
  //     // } else {
  //       parameters.resumeAt = 0;
  //       parameters.resume = false;
  //       parameters.finalChunk = fileSize <= chunkSize;
  //       this._retryUploadData[parameters.uploadTokenId] = { resumeAt: start };
  //       console.log("log: [info] [kaltura-http-client-base]: Start new upload");
  //     // }
  //
  //     const fileData = fileSize > chunkSize ? file.slice(start, end, file.type) : file;
  //     data = new FormData();
  //     data.append("fileData", fileData, file.name);
  //     data.append("fileName", file.name);
  //
  //     xhr = this._chunkUpload(data, xhrStateChangeHandler, getProgressCallbackHandler(start));
  //
  //     return () => {
  //       if (!isComplete) {
  //         xhr.abort();
  //         isComplete = true;
  //
  //         //delete this._retryUploadData[parameters.uploadTokenId];
  //       }
  //     };
  //   });
  // }
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
