
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaScheduleEventListResponse } from './KalturaScheduleEventListResponse';

import { KalturaScheduleEventFilter } from './KalturaScheduleEventFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ScheduleEventListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaScheduleEventFilter;
	pager? : KalturaFilterPager;
}

/** 
* List KalturaScheduleEvent objects
**/
export class ScheduleEventListAction extends KalturaRequest<KalturaScheduleEventListResponse> {

    filter : KalturaScheduleEventFilter;
	pager : KalturaFilterPager;

    constructor(data? : ScheduleEventListActionArgs)
    {
        super(data, 'o', 'KalturaScheduleEventListResponse');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'schedule_scheduleevent' },
				action : { type : 'c' , default : 'list' },
				filter : { type : 'o'  , subType : 'KalturaScheduleEventFilter'},
				pager : { type : 'o'  , subType : 'KalturaFilterPager'}
            }
        );
        return result;
    }
}

