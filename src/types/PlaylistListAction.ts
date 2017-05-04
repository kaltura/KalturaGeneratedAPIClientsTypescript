
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPlaylistListResponse } from './KalturaPlaylistListResponse';

import { KalturaPlaylistFilter } from './KalturaPlaylistFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PlaylistListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaPlaylistFilter;
	pager? : KalturaFilterPager;
}

/** 
* List available playlists
**/
export class PlaylistListAction extends KalturaRequest<KalturaPlaylistListResponse> {

    filter : KalturaPlaylistFilter;
	pager : KalturaFilterPager;

    constructor(data? : PlaylistListActionArgs)
    {
        super(data, 'o', 'KalturaPlaylistListResponse');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'playlist' },
				action : { type : 'c' , default : 'list' },
				filter : { type : 'o'  , subType : 'KalturaPlaylistFilter'},
				pager : { type : 'o'  , subType : 'KalturaFilterPager'}
            }
        );
        return result;
    }
}

