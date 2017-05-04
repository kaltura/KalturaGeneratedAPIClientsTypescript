
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPlaylist } from './KalturaPlaylist';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PlaylistCloneActionArgs  extends KalturaRequestArgs {
    id : string;
	newPlaylist? : KalturaPlaylist;
}

/** 
* Clone an existing playlist
**/
export class PlaylistCloneAction extends KalturaRequest<KalturaPlaylist> {

    id : string;
	newPlaylist : KalturaPlaylist;

    constructor(data : PlaylistCloneActionArgs)
    {
        super(data, 'o', 'KalturaPlaylist');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'playlist' },
				action : { type : 'c' , default : 'clone' },
				id : { type : 's'  },
				newPlaylist : { type : 'o'  , subType : 'KalturaPlaylist'}
            }
        );
        return result;
    }
}

