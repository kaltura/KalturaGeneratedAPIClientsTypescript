
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBaseEntry } from './KalturaBaseEntry';

import { KalturaPlaylistType } from './KalturaPlaylistType';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PlaylistExecuteFromContentActionArgs  extends KalturaRequestArgs {
    playlistType : KalturaPlaylistType;
	playlistContent : string;
	detailed? : string;
	pager? : KalturaFilterPager;
}

/** 
* Retrieve playlist for playing purpose, based on content
**/
export class PlaylistExecuteFromContentAction extends KalturaRequest<KalturaBaseEntry[]> {

    playlistType : KalturaPlaylistType;
	playlistContent : string;
	detailed : string;
	pager : KalturaFilterPager;

    constructor(data : PlaylistExecuteFromContentActionArgs)
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
				action : { type : 'c' , default : 'executeFromContent' },
				playlistType : { type : 'en'  , subType : 'KalturaPlaylistType'},
				playlistContent : { type : 's'  },
				detailed : { type : 's'  },
				pager : { type : 'o'  , subType : 'KalturaFilterPager'}
            }
        );
        return result;
    }
}

