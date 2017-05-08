
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveStreamListResponse } from './KalturaLiveStreamListResponse';

import { KalturaLiveStreamEntryFilter } from './KalturaLiveStreamEntryFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface LiveStreamListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaLiveStreamEntryFilter;
	pager? : KalturaFilterPager;
}

/** 
* List live stream entries by filter with paging support.
**/
export class LiveStreamListAction extends KalturaRequest<KalturaLiveStreamListResponse> {

    filter : KalturaLiveStreamEntryFilter;
	pager : KalturaFilterPager;

    constructor(data? : LiveStreamListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaLiveStreamListResponse', responseConstructor : KalturaLiveStreamListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'livestream' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaLiveStreamEntryFilter, subType : 'KalturaLiveStreamEntryFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

