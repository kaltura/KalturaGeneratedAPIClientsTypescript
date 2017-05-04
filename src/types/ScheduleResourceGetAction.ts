
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaScheduleResource } from './KalturaScheduleResource';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ScheduleResourceGetActionArgs  extends KalturaRequestArgs {
    scheduleResourceId : number;
}

/** 
* Retrieve a KalturaScheduleResource object by ID
**/
export class ScheduleResourceGetAction extends KalturaRequest<KalturaScheduleResource> {

    scheduleResourceId : number;

    constructor(data : ScheduleResourceGetActionArgs)
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
				action : { type : 'c' , default : 'get' },
				scheduleResourceId : { type : 'n'  }
            }
        );
        return result;
    }
}

