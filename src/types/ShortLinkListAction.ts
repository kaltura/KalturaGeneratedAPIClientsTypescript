
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaShortLinkListResponse } from './KalturaShortLinkListResponse';

import { KalturaShortLinkFilter } from './KalturaShortLinkFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ShortLinkListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaShortLinkFilter;
	pager? : KalturaFilterPager;
}

/** 
* List short link objects by filter and pager
**/
export class ShortLinkListAction extends KalturaRequest<KalturaShortLinkListResponse> {

    filter : KalturaShortLinkFilter;
	pager : KalturaFilterPager;

    constructor(data? : ShortLinkListActionArgs)
    {
        super(data, 'o', 'KalturaShortLinkListResponse');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'shortlink_shortlink' },
				action : { type : 'c' , default : 'list' },
				filter : { type : 'o'  , subType : 'KalturaShortLinkFilter'},
				pager : { type : 'o'  , subType : 'KalturaFilterPager'}
            }
        );
        return result;
    }
}

