
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveStreamEntry } from './KalturaLiveStreamEntry';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface LiveStreamUpdateOfflineThumbnailFromUrlActionArgs  extends KalturaRequestArgs {
    entryId : string;
	url : string;
}

/** 
* Update entry thumbnail using url
**/
export class LiveStreamUpdateOfflineThumbnailFromUrlAction extends KalturaRequest<KalturaLiveStreamEntry> {

    entryId : string;
	url : string;

    constructor(data : LiveStreamUpdateOfflineThumbnailFromUrlActionArgs)
    {
        super(data, 'o', 'KalturaLiveStreamEntry');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'livestream' },
				action : { type : 'c' , default : 'updateOfflineThumbnailFromUrl' },
				entryId : { type : 's'  },
				url : { type : 's'  }
            }
        );
        return result;
    }
}

