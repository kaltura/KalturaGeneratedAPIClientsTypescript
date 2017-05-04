
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBaseEntry } from './KalturaBaseEntry';

import { KalturaMediaEntryFilterForPlaylist } from './KalturaMediaEntryFilterForPlaylist';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PlaylistExecuteFromFiltersActionArgs  extends KalturaRequestArgs {
    filters : KalturaMediaEntryFilterForPlaylist[];
	totalResults : number;
	detailed? : string;
	pager? : KalturaFilterPager;
}

/** 
* Revrieve playlist for playing purpose, based on media entry filters
**/
export class PlaylistExecuteFromFiltersAction extends KalturaRequest<KalturaBaseEntry[]> {

    filters : KalturaMediaEntryFilterForPlaylist[];
	totalResults : number;
	detailed : string;
	pager : KalturaFilterPager;

    constructor(data : PlaylistExecuteFromFiltersActionArgs)
    {
        super(data, 'a', 'KalturaBaseEntry');
        if (typeof this.filters === 'undefined') this.filters = [];
		if (typeof this.detailed === 'undefined') this.detailed = "1";
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'playlist' },
				action : { type : 'c' , default : 'executeFromFilters' },
				filters : { type : 'a'  , subType : 'KalturaMediaEntryFilterForPlaylist'},
				totalResults : { type : 'n'  },
				detailed : { type : 's'  },
				pager : { type : 'o'  , subType : 'KalturaFilterPager'}
            }
        );
        return result;
    }
}

