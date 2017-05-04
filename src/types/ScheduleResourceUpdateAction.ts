
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaScheduleResource } from './KalturaScheduleResource';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ScheduleResourceUpdateActionArgs  extends KalturaRequestArgs {
    scheduleResourceId : number;
	scheduleResource : KalturaScheduleResource;
}

/** 
* Update an existing KalturaScheduleResource object
**/
export class ScheduleResourceUpdateAction extends KalturaRequest<KalturaScheduleResource> {

    scheduleResourceId : number;
	scheduleResource : KalturaScheduleResource;

    constructor(data : ScheduleResourceUpdateActionArgs)
    {
        super(data, 'o', 'KalturaScheduleResource');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'schedule_scheduleresource' },
				action : { type : 'c' , default : 'update' },
				scheduleResourceId : { type : 'n'  },
				scheduleResource : { type : 'o'  , subType : 'KalturaScheduleResource'}
            }
        );
        return result;
    }
}

