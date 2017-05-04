import { KalturaResponse } from "./kaltura-response";
import { KalturaRequestBase, KalturaRequestBaseArgs } from "./kaltura-request-base";
import { KalturaAPIException } from './kaltura-api-exception';

export interface KalturaRequestArgs extends KalturaRequestBaseArgs
{

}


export abstract class KalturaRequest<T> extends KalturaRequestBase {

    protected callback: (response: KalturaResponse<T>) => void;

    constructor(data : KalturaRequestBaseArgs, private responseType : string, private responseSubType? : string) {
        super(data);
    }

    setCompletion(callback: (response: KalturaResponse<T>) => void): this {
        this.callback = callback;
        return this;
    }

    handleResponse(response: any): KalturaResponse<T> {
        let responseResult: any;
        let responseError: any;

        try {
            let responseObject = null;

            if (response) {
                if (response.objectType === 'KalturaAPIException') {
                    responseObject = super._parseResponseProperty(
                        "",
                        {
                            type: 'o',
                            subType: 'KalturaAPIException'
                        },
                        response
                    );
                } else {
                    responseObject = super._parseResponseProperty(
                        "",
                        {
                            type: this.responseType,
                            subType: this.responseSubType
                        },
                        response
                    );
                }
            }

            if (!responseObject && this.responseType !== 'v') {
                responseError = new KalturaAPIException('client::response_type_error', `server response is undefined, expected '${this.responseType} / ${this.responseSubType}'`);
            } else if (responseObject instanceof KalturaAPIException) {
                    // got exception from library
                    responseError = responseObject;
            }else {
                responseResult = responseObject;
            }
        } catch (ex) {
            // TODO [kmc] should implement
            responseError = new KalturaAPIException('client::general_error', ex.message);
        }


        const result = new KalturaResponse<T>(responseResult, responseError);

        if (this.callback) {
            try {
                this.callback(result);
            } catch (ex) {
                // do nothing by design
            }
        }

        return result;
    }


}
