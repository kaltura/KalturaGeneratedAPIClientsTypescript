
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDrmProfile } from './KalturaDrmProfile';

import { KalturaDrmProviderType } from './KalturaDrmProviderType';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DrmProfileGetByProviderActionArgs  extends KalturaRequestArgs {
    provider : KalturaDrmProviderType;
}

/** 
* Retrieve a KalturaDrmProfile object by provider, if no specific profile defined
* return default profile
**/
export class DrmProfileGetByProviderAction extends KalturaRequest<KalturaDrmProfile> {

    provider : KalturaDrmProviderType;

    constructor(data : DrmProfileGetByProviderActionArgs)
    {
        super(data, 'o', 'KalturaDrmProfile');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'drm_drmprofile' },
				action : { type : 'c' , default : 'getByProvider' },
				provider : { type : 'es'  , subType : 'KalturaDrmProviderType'}
            }
        );
        return result;
    }
}

