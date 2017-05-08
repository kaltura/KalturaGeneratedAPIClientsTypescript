
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionProfile } from './KalturaDistributionProfile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DistributionProfileAddActionArgs  extends KalturaRequestArgs {
    distributionProfile : KalturaDistributionProfile;
}

/** 
* Add new Distribution Profile
**/
export class DistributionProfileAddAction extends KalturaRequest<KalturaDistributionProfile> {

    distributionProfile : KalturaDistributionProfile;

    constructor(data : DistributionProfileAddActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaDistributionProfile', responseConstructor : KalturaDistributionProfile  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'contentdistribution_distributionprofile' },
				action : { type : 'c', default : 'add' },
				distributionProfile : { type : 'o', subTypeConstructor : KalturaDistributionProfile, subType : 'KalturaDistributionProfile' }
            }
        );
        return result;
    }
}

