
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaWidgetListResponse } from './KalturaWidgetListResponse';

import { KalturaWidgetFilter } from './KalturaWidgetFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface WidgetListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaWidgetFilter;
	pager? : KalturaFilterPager;
}

/** 
* Retrieve a list of available widget depends on the filter given
**/
export class WidgetListAction extends KalturaRequest<KalturaWidgetListResponse> {

    filter : KalturaWidgetFilter;
	pager : KalturaFilterPager;

    constructor(data? : WidgetListActionArgs)
    {
        super(data, 'o', 'KalturaWidgetListResponse');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'widget' },
				action : { type : 'c' , default : 'list' },
				filter : { type : 'o'  , subType : 'KalturaWidgetFilter'},
				pager : { type : 'o'  , subType : 'KalturaFilterPager'}
            }
        );
        return result;
    }
}

