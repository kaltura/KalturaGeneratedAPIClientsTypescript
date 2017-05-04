import { KalturaRequest } from "../kaltura-request";
import { KalturaMultiRequest } from "../kaltura-multi-request";
import { KalturaMultiResponse } from "../kaltura-multi-response";
import { KalturaRequestBase } from "../kaltura-request-base";
import { KalturaAPIException } from '../kaltura-api-exception';
import { KalturaUploadRequest } from '../kaltura-upload-request';
import { CancelableAction } from '../utils/cancelable-action';

export abstract class KalturaClientBase {

    protected abstract _transmitFileUploadRequest(request): CancelableAction;
    protected abstract _transmitRequest(request): CancelableAction;

    protected _multiRequest(request: KalturaMultiRequest): CancelableAction {
        let transmitAction = this.transmit(request);

        transmitAction.then(
            result => {
                return request.handleResponse(result);
            },
            (error) => {
                throw error;
            }
        );

        return transmitAction;
    }

    protected _request<T>(request: KalturaRequest<T>): CancelableAction {
        let transmitAction = this.transmit(request);

        transmitAction.then(
            (result) =>
            {
                const response: any = request.handleResponse(result);

                if (response.error) {
                    throw response.error;
                } else {
                    return response.result;
                }
            },
            (error) => {
                let kalturaAPIException;
                if (error instanceof KalturaAPIException) {
                    kalturaAPIException = error;
                } else if (error instanceof Error && error.message) {

                    kalturaAPIException = new KalturaAPIException("client::unknown-error", error.message);
                } else {
                    const errorMessage = typeof error === 'string' ? error : 'Error connecting to server';
                    kalturaAPIException = new KalturaAPIException("client::unknown-error", errorMessage);
                }

                throw kalturaAPIException;
            }
        );

        return transmitAction;
    }


    private transmit(request: KalturaRequestBase): CancelableAction {
        if (request instanceof KalturaUploadRequest) {
            return this._transmitFileUploadRequest(request);
        } else if (request instanceof KalturaRequest || request instanceof KalturaMultiRequest) {
            return this._transmitRequest(request);
        } else {
            throw new KalturaAPIException("client::request_type_error", 'unsupported request type requested');
        }
    }
}
