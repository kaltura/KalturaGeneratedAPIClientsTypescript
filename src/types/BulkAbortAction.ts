
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBulkUpload } from './KalturaBulkUpload';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface BulkAbortActionArgs  extends KalturaRequestArgs {
    id : number;
}

/** 
* Aborts the bulk upload and all its child jobs
**/
export class BulkAbortAction extends KalturaRequest<KalturaBulkUpload> {

    id : number;

    constructor(data : BulkAbortActionArgs)
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
				action : { type : 'c' , default : 'abort'  },
				id : { type : 'n'   }
            }
        );
        return result;
    }
}

