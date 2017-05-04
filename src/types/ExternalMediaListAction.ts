
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaExternalMediaEntryListResponse } from './KalturaExternalMediaEntryListResponse';

import { KalturaExternalMediaEntryFilter } from './KalturaExternalMediaEntryFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ExternalMediaListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaExternalMediaEntryFilter;
	pager? : KalturaFilterPager;
}

/** 
* List media entries by filter with paging support.
**/
export class ExternalMediaListAction extends KalturaRequest<KalturaExternalMediaEntryListResponse> {

    filter : KalturaExternalMediaEntryFilter;
	pager : KalturaFilterPager;

    constructor(data? : ExternalMediaListActionArgs)
    {
        super(data, 'o', 'KalturaExternalMediaEntryListResponse');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'externalmedia_externalmedia' },
				action : { type : 'c' , default : 'list' },
				filter : { type : 'o'  , subType : 'KalturaExternalMediaEntryFilter'},
				pager : { type : 'o'  , subType : 'KalturaFilterPager'}
            }
        );
        return result;
    }
}

