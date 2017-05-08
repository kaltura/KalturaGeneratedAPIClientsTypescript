
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaEventNotificationScope } from './KalturaEventNotificationScope';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface EventNotificationTemplateDispatchActionArgs  extends KalturaRequestArgs {
    id : number;
	scope : KalturaEventNotificationScope;
}

/** 
* Dispatch event notification object by id
**/
export class EventNotificationTemplateDispatchAction extends KalturaRequest<number> {

    id : number;
	scope : KalturaEventNotificationScope;

    constructor(data : EventNotificationTemplateDispatchActionArgs)
    {
        super(data, {responseType : 'n', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'eventnotification_eventnotificationtemplate'  },
				action : { type : 'c' , default : 'dispatch'  },
				id : { type : 'n'   },
				scope : { type : 'o'   , fallbackConstructor :  KalturaEventNotificationScope, subType : 'KalturaEventNotificationScope'}
            }
        );
        return result;
    }
}

