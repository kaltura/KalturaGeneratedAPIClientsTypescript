
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaScheduleResourceListResponse } from './KalturaScheduleResourceListResponse';

import { KalturaScheduleResourceFilter } from './KalturaScheduleResourceFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ScheduleResourceListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaScheduleResourceFilter;
	pager? : KalturaFilterPager;
}

/** 
* List KalturaScheduleResource objects
**/
export class ScheduleResourceListAction extends KalturaRequest<KalturaScheduleResourceListResponse> {

    filter : KalturaScheduleResourceFilter;
	pager : KalturaFilterPager;

    constructor(data? : ScheduleResourceListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaScheduleResourceListResponse', responseConstructor : KalturaScheduleResourceListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'schedule_scheduleresource'  },
				action : { type : 'c' , default : 'list'  },
				filter : { type : 'o'   , fallbackConstructor :  KalturaScheduleResourceFilter, subType : 'KalturaScheduleResourceFilter'},
				pager : { type : 'o'   , fallbackConstructor :  KalturaFilterPager, subType : 'KalturaFilterPager'}
            }
        );
        return result;
    }
}

