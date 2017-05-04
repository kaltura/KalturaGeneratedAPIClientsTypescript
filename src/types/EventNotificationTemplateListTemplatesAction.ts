
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEventNotificationTemplateListResponse } from './KalturaEventNotificationTemplateListResponse';

import { KalturaEventNotificationTemplateFilter } from './KalturaEventNotificationTemplateFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface EventNotificationTemplateListTemplatesActionArgs  extends KalturaRequestArgs {
    filter? : KalturaEventNotificationTemplateFilter;
	pager? : KalturaFilterPager;
}

/** 
* Action lists the template partner event notification templates.
**/
export class EventNotificationTemplateListTemplatesAction extends KalturaRequest<KalturaEventNotificationTemplateListResponse> {

    filter : KalturaEventNotificationTemplateFilter;
	pager : KalturaFilterPager;

    constructor(data? : EventNotificationTemplateListTemplatesActionArgs)
    {
        super(data, 'o', 'KalturaEventNotificationTemplateListResponse');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'eventnotification_eventnotificationtemplate' },
				action : { type : 'c' , default : 'listTemplates' },
				filter : { type : 'o'  , subType : 'KalturaEventNotificationTemplateFilter'},
				pager : { type : 'o'  , subType : 'KalturaFilterPager'}
            }
        );
        return result;
    }
}

