
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEventNotificationTemplate } from './KalturaEventNotificationTemplate';

import { KalturaEventNotificationTemplateStatus } from './KalturaEventNotificationTemplateStatus';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface EventNotificationTemplateUpdateStatusActionArgs  extends KalturaRequestArgs {
    id : number;
	status : KalturaEventNotificationTemplateStatus;
}

/** 
* Update event notification template status by id
**/
export class EventNotificationTemplateUpdateStatusAction extends KalturaRequest<KalturaEventNotificationTemplate> {

    id : number;
	status : KalturaEventNotificationTemplateStatus;

    constructor(data : EventNotificationTemplateUpdateStatusActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaEventNotificationTemplate', responseConstructor : KalturaEventNotificationTemplate  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'eventnotification_eventnotificationtemplate'  },
				action : { type : 'c' , default : 'updateStatus'  },
				id : { type : 'n'   },
				status : { type : 'en'   , subType : 'KalturaEventNotificationTemplateStatus'}
            }
        );
        return result;
    }
}

