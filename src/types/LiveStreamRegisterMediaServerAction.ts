
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveEntry } from './KalturaLiveEntry';

import { KalturaEntryServerNodeType } from './KalturaEntryServerNodeType';
import { KalturaEntryServerNodeStatus } from './KalturaEntryServerNodeStatus';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface LiveStreamRegisterMediaServerActionArgs  extends KalturaRequestArgs {
    entryId : string;
	hostname : string;
	mediaServerIndex : KalturaEntryServerNodeType;
	applicationName? : string;
	liveEntryStatus? : KalturaEntryServerNodeStatus;
}

/** 
* Register media server to live entry
**/
export class LiveStreamRegisterMediaServerAction extends KalturaRequest<KalturaLiveEntry> {

    entryId : string;
	hostname : string;
	mediaServerIndex : KalturaEntryServerNodeType;
	applicationName : string;
	liveEntryStatus : KalturaEntryServerNodeStatus;

    constructor(data : LiveStreamRegisterMediaServerActionArgs)
    {
        super(data, 'o', 'KalturaLiveEntry');
        if (typeof this.liveEntryStatus === 'undefined') this.liveEntryStatus = 1;
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'livestream' },
				action : { type : 'c' , default : 'registerMediaServer' },
				entryId : { type : 's'  },
				hostname : { type : 's'  },
				mediaServerIndex : { type : 'es'  , subType : 'KalturaEntryServerNodeType'},
				applicationName : { type : 's'  },
				liveEntryStatus : { type : 'en'  , subType : 'KalturaEntryServerNodeStatus'}
            }
        );
        return result;
    }
}

