
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaScheduleResource } from './KalturaScheduleResource';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ScheduleResourceDeleteActionArgs  extends KalturaRequestArgs {
    scheduleResourceId : number;
}

/** 
* Mark the KalturaScheduleResource object as deleted
**/
export class ScheduleResourceDeleteAction extends KalturaRequest<KalturaScheduleResource> {

    scheduleResourceId : number;

    constructor(data : ScheduleResourceDeleteActionArgs)
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
				action : { type : 'c' , default : 'delete' },
				scheduleResourceId : { type : 'n'  }
            }
        );
        return result;
    }
}

