
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface BulkUploadServeLogActionArgs  extends KalturaRequestArgs {
    id : number;
}

/**
 * Build request payload for service 'bulkUpload' action 'serveLog'.
 *
 * Usage: serveLog action returan the original file
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class BulkUploadServeLogAction extends KalturaRequest<string> {

    id : number;

    constructor(data : BulkUploadServeLogActionArgs)
    {
        super(data, {responseType : 'f', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'bulkupload' },
				action : { type : 'c', default : 'serveLog' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

