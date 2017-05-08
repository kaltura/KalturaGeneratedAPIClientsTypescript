
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveStreamEntry } from './KalturaLiveStreamEntry';

import { KalturaSourceType } from './KalturaSourceType';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface LiveStreamAddActionArgs  extends KalturaRequestArgs {
    liveStreamEntry : KalturaLiveStreamEntry;
	sourceType? : KalturaSourceType;
}

/** 
* Adds new live stream entry.   The entry will be queued for provision.
**/
export class LiveStreamAddAction extends KalturaRequest<KalturaLiveStreamEntry> {

    liveStreamEntry : KalturaLiveStreamEntry;
	sourceType : KalturaSourceType;

    constructor(data : LiveStreamAddActionArgs)
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
				action : { type : 'c' , default : 'add'  },
				liveStreamEntry : { type : 'o'   , fallbackConstructor :  KalturaLiveStreamEntry, subType : 'KalturaLiveStreamEntry'},
				sourceType : { type : 'es'   , subType : 'KalturaSourceType'}
            }
        );
        return result;
    }
}

