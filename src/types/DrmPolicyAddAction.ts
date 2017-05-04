
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDrmPolicy } from './KalturaDrmPolicy';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DrmPolicyAddActionArgs  extends KalturaRequestArgs {
    drmPolicy : KalturaDrmPolicy;
}

/** 
* Allows you to add a new DrmPolicy object
**/
export class DrmPolicyAddAction extends KalturaRequest<KalturaDrmPolicy> {

    drmPolicy : KalturaDrmPolicy;

    constructor(data : DrmPolicyAddActionArgs)
    {
        super(data, 'o', 'KalturaDrmPolicy');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'drm_drmpolicy' },
				action : { type : 'c' , default : 'add' },
				drmPolicy : { type : 'o'  , subType : 'KalturaDrmPolicy'}
            }
        );
        return result;
    }
}

