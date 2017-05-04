
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMediaListResponse } from './KalturaMediaListResponse';

import { KalturaMediaEntryFilter } from './KalturaMediaEntryFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface MediaListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaMediaEntryFilter;
	pager? : KalturaFilterPager;
}

/** 
* List media entries by filter with paging support.
**/
export class MediaListAction extends KalturaRequest<KalturaMediaListResponse> {

    filter : KalturaMediaEntryFilter;
	pager : KalturaFilterPager;

    constructor(data? : MediaListActionArgs)
    {
        super(data, 'o', 'KalturaMediaListResponse');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'media' },
				action : { type : 'c' , default : 'list' },
				filter : { type : 'o'  , subType : 'KalturaMediaEntryFilter'},
				pager : { type : 'o'  , subType : 'KalturaFilterPager'}
            }
        );
        return result;
    }
}

