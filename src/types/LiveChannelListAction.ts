
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveChannelListResponse } from './KalturaLiveChannelListResponse';

import { KalturaLiveChannelFilter } from './KalturaLiveChannelFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface LiveChannelListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaLiveChannelFilter;
	pager? : KalturaFilterPager;
}

/** 
* List live channels by filter with paging support.
**/
export class LiveChannelListAction extends KalturaRequest<KalturaLiveChannelListResponse> {

    filter : KalturaLiveChannelFilter;
	pager : KalturaFilterPager;

    constructor(data? : LiveChannelListActionArgs)
    {
        super(data, 'o', 'KalturaLiveChannelListResponse');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'livechannel' },
				action : { type : 'c' , default : 'list' },
				filter : { type : 'o'  , subType : 'KalturaLiveChannelFilter'},
				pager : { type : 'o'  , subType : 'KalturaFilterPager'}
            }
        );
        return result;
    }
}

