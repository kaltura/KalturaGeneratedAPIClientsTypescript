
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface BulkUploadServeActionArgs  extends KalturaRequestArgs {
    id : number;
}

/** 
* serve action returan the original file.
**/
export class BulkUploadServeAction extends KalturaRequest<string> {

    id : number;

    constructor(data : BulkUploadServeActionArgs)
    {
        super(data, {responseType : 'f', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'bulkupload'  },
				action : { type : 'c' , default : 'serve'  },
				id : { type : 'n'   }
            }
        );
        return result;
    }
}

