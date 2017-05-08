
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBulkUpload } from './KalturaBulkUpload';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface BulkGetActionArgs  extends KalturaRequestArgs {
    id : number;
}

/** 
* Get bulk upload batch job by id
**/
export class BulkGetAction extends KalturaRequest<KalturaBulkUpload> {

    id : number;

    constructor(data : BulkGetActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaBulkUpload', responseConstructor : KalturaBulkUpload  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'bulkupload_bulk'  },
				action : { type : 'c' , default : 'get'  },
				id : { type : 'n'   }
            }
        );
        return result;
    }
}

