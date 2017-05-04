
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDataListResponse } from './KalturaDataListResponse';

import { KalturaDataEntryFilter } from './KalturaDataEntryFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DataListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaDataEntryFilter;
	pager? : KalturaFilterPager;
}

/** 
* List data entries by filter with paging support.
**/
export class DataListAction extends KalturaRequest<KalturaDataListResponse> {

    filter : KalturaDataEntryFilter;
	pager : KalturaFilterPager;

    constructor(data? : DataListActionArgs)
    {
        super(data, 'o', 'KalturaDataListResponse');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'data' },
				action : { type : 'c' , default : 'list' },
				filter : { type : 'o'  , subType : 'KalturaDataEntryFilter'},
				pager : { type : 'o'  , subType : 'KalturaFilterPager'}
            }
        );
        return result;
    }
}

