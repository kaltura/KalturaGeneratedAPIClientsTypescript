
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface BulkServeActionArgs  extends KalturaRequestArgs {
    id : number;
}

/**
 * Build request payload for service 'bulk' action 'serve'.
 *
 * Usage: serve action returns the original file
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class BulkServeAction extends KalturaRequest<string> {

    id : number;

    constructor(data : BulkServeActionArgs)
    {
        super(data, {responseType : 'f', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'bulkupload_bulk' },
				action : { type : 'c', default : 'serve' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

