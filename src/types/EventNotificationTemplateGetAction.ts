
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEventNotificationTemplate } from './KalturaEventNotificationTemplate';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface EventNotificationTemplateGetActionArgs  extends KalturaRequestArgs {
    id : number;
}

/** 
* Retrieve an event notification template object by id
**/
export class EventNotificationTemplateGetAction extends KalturaRequest<KalturaEventNotificationTemplate> {

    id : number;

    constructor(data : EventNotificationTemplateGetActionArgs)
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
				action : { type : 'c' , default : 'get'  },
				id : { type : 'n'   }
            }
        );
        return result;
    }
}

