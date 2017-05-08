
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEventNotificationTemplateListResponse } from './KalturaEventNotificationTemplateListResponse';

import { KalturaEventNotificationTemplateFilter } from './KalturaEventNotificationTemplateFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface EventNotificationTemplateListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaEventNotificationTemplateFilter;
	pager? : KalturaFilterPager;
}

/** 
* list event notification template objects
**/
export class EventNotificationTemplateListAction extends KalturaRequest<KalturaEventNotificationTemplateListResponse> {

    filter : KalturaEventNotificationTemplateFilter;
	pager : KalturaFilterPager;

    constructor(data? : EventNotificationTemplateListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaEventNotificationTemplateListResponse', responseConstructor : KalturaEventNotificationTemplateListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'eventnotification_eventnotificationtemplate'  },
				action : { type : 'c' , default : 'list'  },
				filter : { type : 'o'   , fallbackConstructor :  KalturaEventNotificationTemplateFilter, subType : 'KalturaEventNotificationTemplateFilter'},
				pager : { type : 'o'   , fallbackConstructor :  KalturaFilterPager, subType : 'KalturaFilterPager'}
            }
        );
        return result;
    }
}

