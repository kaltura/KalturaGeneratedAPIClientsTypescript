
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveStreamEntry } from './KalturaLiveStreamEntry';

import { KalturaPlaybackProtocol } from './KalturaPlaybackProtocol';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface LiveStreamRemoveLiveStreamPushPublishConfigurationActionArgs  extends KalturaRequestArgs {
    entryId : string;
	protocol : KalturaPlaybackProtocol;
}

/** 
* Remove push publish configuration from entry
**/
export class LiveStreamRemoveLiveStreamPushPublishConfigurationAction extends KalturaRequest<KalturaLiveStreamEntry> {

    entryId : string;
	protocol : KalturaPlaybackProtocol;

    constructor(data : LiveStreamRemoveLiveStreamPushPublishConfigurationActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaLiveStreamEntry', responseConstructor : KalturaLiveStreamEntry  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'livestream'  },
				action : { type : 'c' , default : 'removeLiveStreamPushPublishConfiguration'  },
				entryId : { type : 's'   },
				protocol : { type : 'es'   , subType : 'KalturaPlaybackProtocol'}
            }
        );
        return result;
    }
}

