
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaScheduledTaskProfile } from './KalturaScheduledTaskProfile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ScheduledTaskProfileAddActionArgs  extends KalturaRequestArgs {
    scheduledTaskProfile : KalturaScheduledTaskProfile;
}

/** 
* Add a new scheduled task profile
**/
export class ScheduledTaskProfileAddAction extends KalturaRequest<KalturaScheduledTaskProfile> {

    scheduledTaskProfile : KalturaScheduledTaskProfile;

    constructor(data : ScheduledTaskProfileAddActionArgs)
    {
        super(data, 'o', 'KalturaScheduledTaskProfile');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'scheduledtask_scheduledtaskprofile' },
				action : { type : 'c' , default : 'add' },
				scheduledTaskProfile : { type : 'o'  , subType : 'KalturaScheduledTaskProfile'}
            }
        );
        return result;
    }
}

