
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBaseEntry } from './KalturaBaseEntry';

import { KalturaContext } from './KalturaContext';
import { KalturaMediaEntryFilterForPlaylist } from './KalturaMediaEntryFilterForPlaylist';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PlaylistExecuteActionArgs  extends KalturaRequestArgs {
    id : string;
	detailed? : string;
	playlistContext? : KalturaContext;
	filter? : KalturaMediaEntryFilterForPlaylist;
	pager? : KalturaFilterPager;
}

/** 
* Retrieve playlist for playing purpose
**/
export class PlaylistExecuteAction extends KalturaRequest<KalturaBaseEntry[]> {

    id : string;
	detailed : string;
	playlistContext : KalturaContext;
	filter : KalturaMediaEntryFilterForPlaylist;
	pager : KalturaFilterPager;

    constructor(data : PlaylistExecuteActionArgs)
    {
        super(data, 'a', 'KalturaBaseEntry');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'playlist' },
				action : { type : 'c' , default : 'execute' },
				id : { type : 's'  },
				detailed : { type : 's'  },
				playlistContext : { type : 'o'  , subType : 'KalturaContext'},
				filter : { type : 'o'  , subType : 'KalturaMediaEntryFilterForPlaylist'},
				pager : { type : 'o'  , subType : 'KalturaFilterPager'}
            }
        );
        return result;
    }
}

