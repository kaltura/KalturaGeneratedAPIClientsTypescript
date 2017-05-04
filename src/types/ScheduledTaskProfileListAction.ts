
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaScheduledTaskProfileListResponse } from './KalturaScheduledTaskProfileListResponse';

import { KalturaScheduledTaskProfileFilter } from './KalturaScheduledTaskProfileFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ScheduledTaskProfileListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaScheduledTaskProfileFilter;
	pager? : KalturaFilterPager;
}

/** 
* List scheduled task profiles
**/
export class ScheduledTaskProfileListAction extends KalturaRequest<KalturaScheduledTaskProfileListResponse> {

    filter : KalturaScheduledTaskProfileFilter;
	pager : KalturaFilterPager;

    constructor(data? : ScheduledTaskProfileListActionArgs)
    {
        super(data, 'o', 'KalturaScheduledTaskProfileListResponse');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'scheduledtask_scheduledtaskprofile' },
				action : { type : 'c' , default : 'list' },
				filter : { type : 'o'  , subType : 'KalturaScheduledTaskProfileFilter'},
				pager : { type : 'o'  , subType : 'KalturaFilterPager'}
            }
        );
        return result;
    }
}

