
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionProfile } from './KalturaDistributionProfile';

import { KalturaDistributionProfileStatus } from './KalturaDistributionProfileStatus';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DistributionProfileUpdateStatusActionArgs  extends KalturaRequestArgs {
    id : number;
	status : KalturaDistributionProfileStatus;
}

/** 
* Update Distribution Profile status by id
**/
export class DistributionProfileUpdateStatusAction extends KalturaRequest<KalturaDistributionProfile> {

    id : number;
	status : KalturaDistributionProfileStatus;

    constructor(data : DistributionProfileUpdateStatusActionArgs)
    {
        super(data, 'o', 'KalturaDistributionProfile');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'contentdistribution_distributionprofile' },
				action : { type : 'c' , default : 'updateStatus' },
				id : { type : 'n'  },
				status : { type : 'en'  , subType : 'KalturaDistributionProfileStatus'}
            }
        );
        return result;
    }
}

