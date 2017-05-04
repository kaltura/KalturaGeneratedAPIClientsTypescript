
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveEntry } from './KalturaLiveEntry';

import { KalturaEntryServerNodeType } from './KalturaEntryServerNodeType';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface LiveStreamUnregisterMediaServerActionArgs  extends KalturaRequestArgs {
    entryId : string;
	hostname : string;
	mediaServerIndex : KalturaEntryServerNodeType;
}

/** 
* Unregister media server from live entry
**/
export class LiveStreamUnregisterMediaServerAction extends KalturaRequest<KalturaLiveEntry> {

    entryId : string;
	hostname : string;
	mediaServerIndex : KalturaEntryServerNodeType;

    constructor(data : LiveStreamUnregisterMediaServerActionArgs)
    {
        super(data, 'o', 'KalturaLiveEntry');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'livestream' },
				action : { type : 'c' , default : 'unregisterMediaServer' },
				entryId : { type : 's'  },
				hostname : { type : 's'  },
				mediaServerIndex : { type : 'es'  , subType : 'KalturaEntryServerNodeType'}
            }
        );
        return result;
    }
}

