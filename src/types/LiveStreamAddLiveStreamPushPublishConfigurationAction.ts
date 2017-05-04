
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveStreamEntry } from './KalturaLiveStreamEntry';

import { KalturaPlaybackProtocol } from './KalturaPlaybackProtocol';
import { KalturaLiveStreamConfiguration } from './KalturaLiveStreamConfiguration';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface LiveStreamAddLiveStreamPushPublishConfigurationActionArgs  extends KalturaRequestArgs {
    entryId : string;
	protocol : KalturaPlaybackProtocol;
	url? : string;
	liveStreamConfiguration? : KalturaLiveStreamConfiguration;
}

/** 
* Add new pushPublish configuration to entry
**/
export class LiveStreamAddLiveStreamPushPublishConfigurationAction extends KalturaRequest<KalturaLiveStreamEntry> {

    entryId : string;
	protocol : KalturaPlaybackProtocol;
	url : string;
	liveStreamConfiguration : KalturaLiveStreamConfiguration;

    constructor(data : LiveStreamAddLiveStreamPushPublishConfigurationActionArgs)
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
				action : { type : 'c' , default : 'addLiveStreamPushPublishConfiguration' },
				entryId : { type : 's'  },
				protocol : { type : 'es'  , subType : 'KalturaPlaybackProtocol'},
				url : { type : 's'  },
				liveStreamConfiguration : { type : 'o'  , subType : 'KalturaLiveStreamConfiguration'}
            }
        );
        return result;
    }
}

