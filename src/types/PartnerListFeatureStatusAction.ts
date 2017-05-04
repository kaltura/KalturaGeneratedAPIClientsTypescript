
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFeatureStatusListResponse } from './KalturaFeatureStatusListResponse';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PartnerListFeatureStatusActionArgs  extends KalturaRequestArgs {
    
}

/** 
* List partner's current processes' statuses
**/
export class PartnerListFeatureStatusAction extends KalturaRequest<KalturaFeatureStatusListResponse> {

    

    constructor(data? : PartnerListFeatureStatusActionArgs)
    {
        super(data, 'o', 'KalturaFeatureStatusListResponse');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'partner' },
				action : { type : 'c' , default : 'listFeatureStatus' }
            }
        );
        return result;
    }
}

