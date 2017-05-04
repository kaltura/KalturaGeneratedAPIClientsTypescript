
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
        super(data, 'o', 'KalturaEventNotificationTemplateListResponse');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'eventnotification_eventnotificationtemplate' },
				action : { type : 'c' , default : 'list' },
				filter : { type : 'o'  , subType : 'KalturaEventNotificationTemplateFilter'},
				pager : { type : 'o'  , subType : 'KalturaFilterPager'}
            }
        );
        return result;
    }
}

