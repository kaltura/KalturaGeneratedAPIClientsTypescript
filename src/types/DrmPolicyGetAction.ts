
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDrmPolicy } from './KalturaDrmPolicy';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DrmPolicyGetActionArgs  extends KalturaRequestArgs {
    drmPolicyId : number;
}

/** 
* Retrieve a KalturaDrmPolicy object by ID
**/
export class DrmPolicyGetAction extends KalturaRequest<KalturaDrmPolicy> {

    drmPolicyId : number;

    constructor(data : DrmPolicyGetActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaDrmPolicy', responseConstructor : KalturaDrmPolicy  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'drm_drmpolicy' },
				action : { type : 'c', default : 'get' },
				drmPolicyId : { type : 'n' }
            }
        );
        return result;
    }
}

