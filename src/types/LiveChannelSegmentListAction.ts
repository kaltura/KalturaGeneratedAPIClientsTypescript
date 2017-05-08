
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveChannelSegmentListResponse } from './KalturaLiveChannelSegmentListResponse';

import { KalturaLiveChannelSegmentFilter } from './KalturaLiveChannelSegmentFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface LiveChannelSegmentListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaLiveChannelSegmentFilter;
	pager? : KalturaFilterPager;
}

/** 
* List live channel segments by filter and pager
**/
export class LiveChannelSegmentListAction extends KalturaRequest<KalturaLiveChannelSegmentListResponse> {

    filter : KalturaLiveChannelSegmentFilter;
	pager : KalturaFilterPager;

    constructor(data? : LiveChannelSegmentListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaLiveChannelSegmentListResponse', responseConstructor : KalturaLiveChannelSegmentListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'livechannelsegment'  },
				action : { type : 'c' , default : 'list'  },
				filter : { type : 'o'   , fallbackConstructor :  KalturaLiveChannelSegmentFilter, subType : 'KalturaLiveChannelSegmentFilter'},
				pager : { type : 'o'   , fallbackConstructor :  KalturaFilterPager, subType : 'KalturaFilterPager'}
            }
        );
        return result;
    }
}

