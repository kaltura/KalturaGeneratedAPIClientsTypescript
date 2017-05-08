
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface UploadTokenDeleteActionArgs  extends KalturaRequestArgs {
    uploadTokenId : string;
}

/** 
* Deletes the upload token by upload token id
**/
export class UploadTokenDeleteAction extends KalturaRequest<void> {

    uploadTokenId : string;

    constructor(data : UploadTokenDeleteActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'uploadtoken'  },
				action : { type : 'c' , default : 'delete'  },
				uploadTokenId : { type : 's'   }
            }
        );
        return result;
    }
}

