
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDrmPolicy } from './KalturaDrmPolicy';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DrmPolicyDeleteActionArgs  extends KalturaRequestArgs {
    drmPolicyId : number;
}

/** 
* Mark the KalturaDrmPolicy object as deleted
**/
export class DrmPolicyDeleteAction extends KalturaRequest<KalturaDrmPolicy> {

    drmPolicyId : number;

    constructor(data : DrmPolicyDeleteActionArgs)
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
				action : { type : 'c' , default : 'delete' },
				drmPolicyId : { type : 'n'  }
            }
        );
        return result;
    }
}

