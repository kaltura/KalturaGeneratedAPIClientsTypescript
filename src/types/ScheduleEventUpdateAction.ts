
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaScheduleEvent } from './KalturaScheduleEvent';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ScheduleEventUpdateActionArgs  extends KalturaRequestArgs {
    scheduleEventId : number;
	scheduleEvent : KalturaScheduleEvent;
}

/** 
* Update an existing KalturaScheduleEvent object
**/
export class ScheduleEventUpdateAction extends KalturaRequest<KalturaScheduleEvent> {

    scheduleEventId : number;
	scheduleEvent : KalturaScheduleEvent;

    constructor(data : ScheduleEventUpdateActionArgs)
    {
        super(data, 'o', 'KalturaScheduleEvent');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'schedule_scheduleevent' },
				action : { type : 'c' , default : 'update' },
				scheduleEventId : { type : 'n'  },
				scheduleEvent : { type : 'o'  , subType : 'KalturaScheduleEvent'}
            }
        );
        return result;
    }
}

