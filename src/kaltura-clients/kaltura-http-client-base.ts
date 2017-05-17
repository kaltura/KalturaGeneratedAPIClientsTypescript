import { CancelableAction } from '../utils/cancelable-action';
import { KalturaClientBase } from './kaltura-client-base';

export abstract class KalturaHttpClientBase extends KalturaClientBase {

    public endpointUrl: string;


    constructor(config :  { endpointUrl : string, clientTag : string, ks? : string, partnerId? : number}) {
        super(config);
        this.endpointUrl = config.endpointUrl;
    }

    private _getHeaders(): any {
        return {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };
    }

    protected _transmitFileUploadRequest(request): CancelableAction {
        const isReadyContext = this._isReady();

        if (!isReadyContext.ready) {
            return new CancelableAction((resolve, reject) => {
                let isComplete = false
                const parameters: any = Object.assign(
                    {
                        format: 1
                    },
                    request.toRequestObject()
                );

                this._assignDefaultParameters(parameters);

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
        else {
            return new CancelableAction((resolve, reject) => {
                reject(isReadyContext.error);
            });
        }
    }

    protected abstract _createCancelableAction(data : { endpoint : string, headers : any, body : {}} ) : CancelableAction;

    private _isReady() : { ready : boolean,  error : Error }
    {
        if (!!this.endpointUrl) {
            return {ready:false,  error : new Error(`property 'endpoint' is required'`) };

        }else {
            return { ready : true, error : null };
        }
    }

    protected _transmitRequest(request): CancelableAction {
        const isReadyContext = this._isReady();

        if (!isReadyContext.ready) {

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

            return this._createCancelableAction({endpoint, headers, body: parameters});
        }
        else {
            return new CancelableAction((resolve, reject) => {
                reject(isReadyContext.error);
            });
        }
    }

    private _buildQuerystring(data : {}, prefix? : string)
    {
        var str = [], p;
        for (p in data) {
            if (data.hasOwnProperty(p)) {
                var k = prefix ? prefix + "[" + p + "]" : p, v = data[p];
                str.push((v !== null && typeof v === "object") ?
                    this._buildQuerystring(v, k) :
                encodeURIComponent(k) + "=" + encodeURIComponent(v));
            }
        }
        return str.join("&");

    }
}
