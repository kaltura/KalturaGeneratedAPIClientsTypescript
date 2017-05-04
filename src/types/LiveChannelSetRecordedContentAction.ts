
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveEntry } from './KalturaLiveEntry';

import { KalturaEntryServerNodeType } from './KalturaEntryServerNodeType';
import { KalturaDataCenterContentResource } from './KalturaDataCenterContentResource';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface LiveChannelSetRecordedContentActionArgs  extends KalturaRequestArgs {
    entryId : string;
	mediaServerIndex : KalturaEntryServerNodeType;
	resource : KalturaDataCenterContentResource;
	duration : number;
	recordedEntryId? : string;
}

/** 
* Sey recorded video to live entry
**/
export class LiveChannelSetRecordedContentAction extends KalturaRequest<KalturaLiveEntry> {

    entryId : string;
	mediaServerIndex : KalturaEntryServerNodeType;
	resource : KalturaDataCenterContentResource;
	duration : number;
	recordedEntryId : string;

    constructor(data : LiveChannelSetRecordedContentActionArgs)
    {
        super(data, 'o', 'KalturaLiveEntry');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'livechannel' },
				action : { type : 'c' , default : 'setRecordedContent' },
				entryId : { type : 's'  },
				mediaServerIndex : { type : 'es'  , subType : 'KalturaEntryServerNodeType'},
				resource : { type : 'o'  , subType : 'KalturaDataCenterContentResource'},
				duration : { type : 'n'  },
				recordedEntryId : { type : 's'  }
            }
        );
        return result;
    }
}

