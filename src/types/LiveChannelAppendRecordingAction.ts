
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveEntry } from './KalturaLiveEntry';

import { KalturaEntryServerNodeType } from './KalturaEntryServerNodeType';
import { KalturaDataCenterContentResource } from './KalturaDataCenterContentResource';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface LiveChannelAppendRecordingActionArgs  extends KalturaRequestArgs {
    entryId : string;
	assetId : string;
	mediaServerIndex : KalturaEntryServerNodeType;
	resource : KalturaDataCenterContentResource;
	duration : number;
	isLastChunk? : boolean;
}

/** 
* Append recorded video to live entry
**/
export class LiveChannelAppendRecordingAction extends KalturaRequest<KalturaLiveEntry> {

    entryId : string;
	assetId : string;
	mediaServerIndex : KalturaEntryServerNodeType;
	resource : KalturaDataCenterContentResource;
	duration : number;
	isLastChunk : boolean;

    constructor(data : LiveChannelAppendRecordingActionArgs)
    {
        super(data, 'o', 'KalturaLiveEntry');
        if (typeof this.isLastChunk === 'undefined') this.isLastChunk = false;
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'livechannel' },
				action : { type : 'c' , default : 'appendRecording' },
				entryId : { type : 's'  },
				assetId : { type : 's'  },
				mediaServerIndex : { type : 'es'  , subType : 'KalturaEntryServerNodeType'},
				resource : { type : 'o'  , subType : 'KalturaDataCenterContentResource'},
				duration : { type : 'n'  },
				isLastChunk : { type : 'b'  }
            }
        );
        return result;
    }
}

