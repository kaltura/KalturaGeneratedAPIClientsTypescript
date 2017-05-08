
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ScheduledTaskProfileDeleteActionArgs  extends KalturaRequestArgs {
    id : number;
}

/** 
* Delete a scheduled task profile
**/
export class ScheduledTaskProfileDeleteAction extends KalturaRequest<void> {

    id : number;

    constructor(data : ScheduledTaskProfileDeleteActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'scheduledtask_scheduledtaskprofile'  },
				action : { type : 'c' , default : 'delete'  },
				id : { type : 'n'   }
            }
        );
        return result;
    }
}

