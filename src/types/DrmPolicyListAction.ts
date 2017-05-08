
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDrmPolicyListResponse } from './KalturaDrmPolicyListResponse';

import { KalturaDrmPolicyFilter } from './KalturaDrmPolicyFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DrmPolicyListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaDrmPolicyFilter;
	pager? : KalturaFilterPager;
}

/** 
* List KalturaDrmPolicy objects
**/
export class DrmPolicyListAction extends KalturaRequest<KalturaDrmPolicyListResponse> {

    filter : KalturaDrmPolicyFilter;
	pager : KalturaFilterPager;

    constructor(data? : DrmPolicyListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaDrmPolicyListResponse', responseConstructor : KalturaDrmPolicyListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'drm_drmpolicy'  },
				action : { type : 'c' , default : 'list'  },
				filter : { type : 'o'   , fallbackConstructor :  KalturaDrmPolicyFilter, subType : 'KalturaDrmPolicyFilter'},
				pager : { type : 'o'   , fallbackConstructor :  KalturaFilterPager, subType : 'KalturaFilterPager'}
            }
        );
        return result;
    }
}

