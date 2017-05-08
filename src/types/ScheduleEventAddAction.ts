
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaScheduleEvent } from './KalturaScheduleEvent';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ScheduleEventAddActionArgs  extends KalturaRequestArgs {
    scheduleEvent : KalturaScheduleEvent;
}

/** 
* Allows you to add a new KalturaScheduleEvent object
**/
export class ScheduleEventAddAction extends KalturaRequest<KalturaScheduleEvent> {

    scheduleEvent : KalturaScheduleEvent;

    constructor(data : ScheduleEventAddActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaScheduleEvent', responseConstructor : KalturaScheduleEvent  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'schedule_scheduleevent'  },
				action : { type : 'c' , default : 'add'  },
				scheduleEvent : { type : 'o'   , fallbackConstructor :  KalturaScheduleEvent, subType : 'KalturaScheduleEvent'}
            }
        );
        return result;
    }
}

