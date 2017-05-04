
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCategoryUserListResponse } from './KalturaCategoryUserListResponse';

import { KalturaCategoryUserFilter } from './KalturaCategoryUserFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CategoryUserListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaCategoryUserFilter;
	pager? : KalturaFilterPager;
}

/** 
* List all categories
**/
export class CategoryUserListAction extends KalturaRequest<KalturaCategoryUserListResponse> {

    filter : KalturaCategoryUserFilter;
	pager : KalturaFilterPager;

    constructor(data? : CategoryUserListActionArgs)
    {
        super(data, 'o', 'KalturaCategoryUserListResponse');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'categoryuser' },
				action : { type : 'c' , default : 'list' },
				filter : { type : 'o'  , subType : 'KalturaCategoryUserFilter'},
				pager : { type : 'o'  , subType : 'KalturaFilterPager'}
            }
        );
        return result;
    }
}

