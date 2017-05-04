
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface EventNotificationTemplateDeleteActionArgs  extends KalturaRequestArgs {
    id : number;
}

/** 
* Delete an event notification template object
**/
export class EventNotificationTemplateDeleteAction extends KalturaRequest<void> {

    id : number;

    constructor(data : EventNotificationTemplateDeleteActionArgs)
    {
        super(data, 'v', '');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'eventnotification_eventnotificationtemplate' },
				action : { type : 'c' , default : 'delete' },
				id : { type : 'n'  }
            }
        );
        return result;
    }
}

