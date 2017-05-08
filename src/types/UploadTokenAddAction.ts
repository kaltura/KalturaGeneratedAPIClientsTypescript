
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUploadToken } from './KalturaUploadToken';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface UploadTokenAddActionArgs  extends KalturaRequestArgs {
    uploadToken? : KalturaUploadToken;
}

/** 
* Adds new upload token to upload a file
**/
export class UploadTokenAddAction extends KalturaRequest<KalturaUploadToken> {

    uploadToken : KalturaUploadToken;

    constructor(data? : UploadTokenAddActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaUploadToken', responseConstructor : KalturaUploadToken  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'uploadtoken' },
				action : { type : 'c', default : 'add' },
				uploadToken : { type : 'o', subTypeConstructor : KalturaUploadToken, subType : 'KalturaUploadToken' }
            }
        );
        return result;
    }
}

