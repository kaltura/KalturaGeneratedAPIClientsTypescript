import { KalturaHttpClientConfiguration } from './kaltura-http-client-configuration';
import { CancelableAction } from '../utils/cancelable-action';
import { KalturaClientBase } from './kaltura-client-base';

export abstract class KalturaHttpClientBase extends KalturaClientBase {
    constructor(public adapterConfiguration : KalturaHttpClientConfiguration) {
        super();
    }

    protected _transmitFileUploadRequest(request): CancelableAction
    {

        const parameters: any = Object.assign(
            {
                format: 1
            },
            request.toRequestObject()
        );
        this.adapterConfiguration.prepareRequestParameters(parameters);

        const data : any  = request.getFormData();

        const {service,action} = parameters;
        delete parameters.service;
        delete parameters.action;

        // build endpoint
        const querystring = this._buildQuerystring(parameters);
        const endpoint = `${this.adapterConfiguration.endpointUrl}/service/${service}/action/${action}?${querystring}`;

        const xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4){
                let resp;

                try {
                    if(xhr.status == 200) {
                        resp = JSON.parse(xhr.response);
                    }else {
                        resp = new Error(xhr.responseText);
                    }
                } catch (e){
                    resp = new Error(xhr.responseText);
                }

                if (resp instanceof Error)
                {
                    observer.error(resp);
                }else {
                    observer.next(resp);
                }
            }
        };

        const progressCallback = request._getProgressCallback();
        if (progressCallback) {
            xhr.upload.addEventListener('progress', function(e){
                if (e.lengthComputable) {
                    progressCallback.apply(request, [e.loaded, e.total]);
                } else {
                    // Unable to compute progress information since the total size is unknown
                }
            }, false);
        }

        xhr.open('POST', endpoint);
        xhr.send(data);
    }

    protected abstract _createCancelableAction(data : { endpoint : string, headers : any, body : {}} ) : CancelableAction;

    protected _transmitRequest(request): CancelableAction
    {
        const parameters: any = Object.assign(
            {
                format: 1
            },
            request.toRequestObject()
        );

        this.adapterConfiguration.prepareRequestParameters(parameters);

        // build endpoint
        const endpoint = `${this.adapterConfiguration.endpointUrl}/service/${parameters.service}/action/${parameters.action}`;

        delete parameters.service;
        delete parameters.action;

        const headers = this.adapterConfiguration.getHeaders();

        return this._createCancelableAction({endpoint, headers, body : parameters});
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
