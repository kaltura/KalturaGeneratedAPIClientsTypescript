
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ScheduleEventResourceDeleteActionArgs  extends KalturaRequestArgs {
    scheduleEventId : number;
	scheduleResourceId : number;
}

/** 
* Mark the KalturaScheduleEventResource object as deleted
**/
export class ScheduleEventResourceDeleteAction extends KalturaRequest<void> {

    scheduleEventId : number;
	scheduleResourceId : number;

    constructor(data : ScheduleEventResourceDeleteActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'schedule_scheduleeventresource' },
				action : { type : 'c', default : 'delete' },
				scheduleEventId : { type : 'n' },
				scheduleResourceId : { type : 'n' }
            }
        );
        return result;
    }
}

