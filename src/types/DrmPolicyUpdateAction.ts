
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDrmPolicy } from './KalturaDrmPolicy';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DrmPolicyUpdateActionArgs  extends KalturaRequestArgs {
    drmPolicyId : number;
	drmPolicy : KalturaDrmPolicy;
}

/** 
* Update an existing KalturaDrmPolicy object
**/
export class DrmPolicyUpdateAction extends KalturaRequest<KalturaDrmPolicy> {

    drmPolicyId : number;
	drmPolicy : KalturaDrmPolicy;

    constructor(data : DrmPolicyUpdateActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaDrmPolicy', responseConstructor : KalturaDrmPolicy  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'drm_drmpolicy'  },
				action : { type : 'c' , default : 'update'  },
				drmPolicyId : { type : 'n'   },
				drmPolicy : { type : 'o'   , fallbackConstructor :  KalturaDrmPolicy, subType : 'KalturaDrmPolicy'}
            }
        );
        return result;
    }
}

