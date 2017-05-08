
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaClientNotification } from './KalturaClientNotification';

import { KalturaNotificationType } from './KalturaNotificationType';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface NotificationGetClientNotificationActionArgs  extends KalturaRequestArgs {
    entryId : string;
	type : KalturaNotificationType;
}

/** 
* Return the notifications for a specific entry id and type
**/
export class NotificationGetClientNotificationAction extends KalturaRequest<KalturaClientNotification> {

    entryId : string;
	type : KalturaNotificationType;

    constructor(data : NotificationGetClientNotificationActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaClientNotification', responseConstructor : KalturaClientNotification  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'notification' },
				action : { type : 'c', default : 'getClientNotification' },
				entryId : { type : 's' },
				type : { type : 'en', subTypeConstructor : KalturaNotificationType, subType : 'KalturaNotificationType' }
            }
        );
        return result;
    }
}

