
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCategoryListResponse } from './KalturaCategoryListResponse';

import { KalturaCategoryFilter } from './KalturaCategoryFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CategoryListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaCategoryFilter;
	pager? : KalturaFilterPager;
}

/** 
* List all categories
**/
export class CategoryListAction extends KalturaRequest<KalturaCategoryListResponse> {

    filter : KalturaCategoryFilter;
	pager : KalturaFilterPager;

    constructor(data? : CategoryListActionArgs)
    {
        super(data, 'o', 'KalturaCategoryListResponse');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'category' },
				action : { type : 'c' , default : 'list' },
				filter : { type : 'o'  , subType : 'KalturaCategoryFilter'},
				pager : { type : 'o'  , subType : 'KalturaFilterPager'}
            }
        );
        return result;
    }
}

