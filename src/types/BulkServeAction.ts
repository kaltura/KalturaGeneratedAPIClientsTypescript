
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface BulkServeActionArgs  extends KalturaRequestArgs {
    id : number;
}

/** 
* serve action returns the original file.
**/
export class BulkServeAction extends KalturaRequest<string> {

    id : number;

    constructor(data : BulkServeActionArgs)
    {
        super(data, 'f', '');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'bulkupload_bulk' },
				action : { type : 'c' , default : 'serve' },
				id : { type : 'n'  }
            }
        );
        return result;
    }
}

