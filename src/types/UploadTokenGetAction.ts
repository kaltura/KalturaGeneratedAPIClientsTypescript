
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUploadToken } from './KalturaUploadToken';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface UploadTokenGetActionArgs  extends KalturaRequestArgs {
    uploadTokenId : string;
}

/** 
* Get upload token by id
**/
export class UploadTokenGetAction extends KalturaRequest<KalturaUploadToken> {

    uploadTokenId : string;

    constructor(data : UploadTokenGetActionArgs)
    {
        super(data, 'o', 'KalturaUploadToken');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'uploadtoken' },
				action : { type : 'c' , default : 'get' },
				uploadTokenId : { type : 's'  }
            }
        );
        return result;
    }
}

