
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
        super(data, 'o', 'KalturaDrmPolicyListResponse');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'drm_drmpolicy' },
				action : { type : 'c' , default : 'list' },
				filter : { type : 'o'  , subType : 'KalturaDrmPolicyFilter'},
				pager : { type : 'o'  , subType : 'KalturaFilterPager'}
            }
        );
        return result;
    }
}

