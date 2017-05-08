
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaScheduledTaskProfile } from './KalturaScheduledTaskProfile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ScheduledTaskProfileUpdateActionArgs  extends KalturaRequestArgs {
    id : number;
	scheduledTaskProfile : KalturaScheduledTaskProfile;
}

/** 
* Update an existing scheduled task profile
**/
export class ScheduledTaskProfileUpdateAction extends KalturaRequest<KalturaScheduledTaskProfile> {

    id : number;
	scheduledTaskProfile : KalturaScheduledTaskProfile;

    constructor(data : ScheduledTaskProfileUpdateActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaScheduledTaskProfile', responseConstructor : KalturaScheduledTaskProfile  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'scheduledtask_scheduledtaskprofile'  },
				action : { type : 'c' , default : 'update'  },
				id : { type : 'n'   },
				scheduledTaskProfile : { type : 'o'   , fallbackConstructor :  KalturaScheduledTaskProfile, subType : 'KalturaScheduledTaskProfile'}
            }
        );
        return result;
    }
}

