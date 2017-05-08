
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPushNotificationData } from './KalturaPushNotificationData';

import { KalturaEventNotificationParameter } from './KalturaEventNotificationParameter';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface EventNotificationTemplateRegisterActionArgs  extends KalturaRequestArgs {
    notificationTemplateSystemName : string;
	userParamsArray : KalturaEventNotificationParameter[];
}

/** 
* Register to a queue from which event messages will be provided according to
* given template. Queue will be created if not already exists
**/
export class EventNotificationTemplateRegisterAction extends KalturaRequest<KalturaPushNotificationData> {

    notificationTemplateSystemName : string;
	userParamsArray : KalturaEventNotificationParameter[];

    constructor(data : EventNotificationTemplateRegisterActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaPushNotificationData', responseConstructor : KalturaPushNotificationData  });
        if (typeof this.userParamsArray === 'undefined') this.userParamsArray = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'eventnotification_eventnotificationtemplate'  },
				action : { type : 'c' , default : 'register'  },
				notificationTemplateSystemName : { type : 's'   },
				userParamsArray : { type : 'a'   , fallbackConstructor :  KalturaEventNotificationParameter, subType : 'KalturaEventNotificationParameter'}
            }
        );
        return result;
    }
}

