
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface BulkServeLogActionArgs  extends KalturaRequestArgs {
    id : number;
}

/** 
* serveLog action returns the log file for the bulk-upload job.
**/
export class BulkServeLogAction extends KalturaRequest<string> {

    id : number;

    constructor(data : BulkServeLogActionArgs)
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
				action : { type : 'c', default : 'serveLog' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

