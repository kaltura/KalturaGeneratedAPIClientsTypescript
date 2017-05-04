
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEventNotificationTemplate } from './KalturaEventNotificationTemplate';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface EventNotificationTemplateUpdateActionArgs  extends KalturaRequestArgs {
    id : number;
	eventNotificationTemplate : KalturaEventNotificationTemplate;
}

/** 
* Update an existing event notification template object
**/
export class EventNotificationTemplateUpdateAction extends KalturaRequest<KalturaEventNotificationTemplate> {

    id : number;
	eventNotificationTemplate : KalturaEventNotificationTemplate;

    constructor(data : EventNotificationTemplateUpdateActionArgs)
    {
        super(data, 'o', 'KalturaEventNotificationTemplate');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'eventnotification_eventnotificationtemplate' },
				action : { type : 'c' , default : 'update' },
				id : { type : 'n'  },
				eventNotificationTemplate : { type : 'o'  , subType : 'KalturaEventNotificationTemplate'}
            }
        );
        return result;
    }
}

