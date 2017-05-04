
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMixListResponse } from './KalturaMixListResponse';

import { KalturaMixEntryFilter } from './KalturaMixEntryFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface MixingListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaMixEntryFilter;
	pager? : KalturaFilterPager;
}

/** 
* List entries by filter with paging support.   Return parameter is an array of
* mix entries.
**/
export class MixingListAction extends KalturaRequest<KalturaMixListResponse> {

    filter : KalturaMixEntryFilter;
	pager : KalturaFilterPager;

    constructor(data? : MixingListActionArgs)
    {
        super(data, 'o', 'KalturaMixListResponse');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'mixing' },
				action : { type : 'c' , default : 'list' },
				filter : { type : 'o'  , subType : 'KalturaMixEntryFilter'},
				pager : { type : 'o'  , subType : 'KalturaFilterPager'}
            }
        );
        return result;
    }
}

