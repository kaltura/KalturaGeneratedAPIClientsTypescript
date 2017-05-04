
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaScheduleEventResource } from './KalturaScheduleEventResource';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ScheduleEventResourceAddActionArgs  extends KalturaRequestArgs {
    scheduleEventResource : KalturaScheduleEventResource;
}

/** 
* Allows you to add a new KalturaScheduleEventResource object
**/
export class ScheduleEventResourceAddAction extends KalturaRequest<KalturaScheduleEventResource> {

    scheduleEventResource : KalturaScheduleEventResource;

    constructor(data : ScheduleEventResourceAddActionArgs)
    {
        super(data, 'o', 'KalturaScheduleEventResource');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'schedule_scheduleeventresource' },
				action : { type : 'c' , default : 'add' },
				scheduleEventResource : { type : 'o'  , subType : 'KalturaScheduleEventResource'}
            }
        );
        return result;
    }
}

