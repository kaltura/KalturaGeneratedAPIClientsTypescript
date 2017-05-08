
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaScheduleEvent } from './KalturaScheduleEvent';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ScheduleEventDeleteActionArgs  extends KalturaRequestArgs {
    scheduleEventId : number;
}

/** 
* Mark the KalturaScheduleEvent object as deleted
**/
export class ScheduleEventDeleteAction extends KalturaRequest<KalturaScheduleEvent> {

    scheduleEventId : number;

    constructor(data : ScheduleEventDeleteActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaScheduleEvent', responseConstructor : KalturaScheduleEvent  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'schedule_scheduleevent' },
				action : { type : 'c', default : 'delete' },
				scheduleEventId : { type : 'n' }
            }
        );
        return result;
    }
}

