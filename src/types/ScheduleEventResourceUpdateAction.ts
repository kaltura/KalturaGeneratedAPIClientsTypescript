
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaScheduleEventResource } from './KalturaScheduleEventResource';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ScheduleEventResourceUpdateActionArgs  extends KalturaRequestArgs {
    scheduleEventId : number;
	scheduleResourceId : number;
	scheduleEventResource : KalturaScheduleEventResource;
}

/** 
* Update an existing KalturaScheduleEventResource object
**/
export class ScheduleEventResourceUpdateAction extends KalturaRequest<KalturaScheduleEventResource> {

    scheduleEventId : number;
	scheduleResourceId : number;
	scheduleEventResource : KalturaScheduleEventResource;

    constructor(data : ScheduleEventResourceUpdateActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaScheduleEventResource', responseConstructor : KalturaScheduleEventResource  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'schedule_scheduleeventresource'  },
				action : { type : 'c' , default : 'update'  },
				scheduleEventId : { type : 'n'   },
				scheduleResourceId : { type : 'n'   },
				scheduleEventResource : { type : 'o'   , fallbackConstructor :  KalturaScheduleEventResource, subType : 'KalturaScheduleEventResource'}
            }
        );
        return result;
    }
}

