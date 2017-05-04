
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaRecordStatus } from './KalturaRecordStatus';
import { KalturaDVRStatus } from './KalturaDVRStatus';
import { KalturaLiveStreamConfiguration } from './KalturaLiveStreamConfiguration';
import { KalturaLivePublishStatus } from './KalturaLivePublishStatus';
import { KalturaLiveStreamPushPublishConfiguration } from './KalturaLiveStreamPushPublishConfiguration';
import { KalturaLiveEntryRecordingOptions } from './KalturaLiveEntryRecordingOptions';
import { KalturaEntryServerNodeStatus } from './KalturaEntryServerNodeStatus';
import { KalturaMediaEntry, KalturaMediaEntryArgs } from './KalturaMediaEntry';

export interface KalturaLiveEntryArgs  extends KalturaMediaEntryArgs {
    offlineMessage? : string;
	recordStatus? : KalturaRecordStatus;
	dvrStatus? : KalturaDVRStatus;
	dvrWindow? : number;
	lastElapsedRecordingTime? : number;
	liveStreamConfigurations? : KalturaLiveStreamConfiguration[];
	recordedEntryId? : string;
	pushPublishEnabled? : KalturaLivePublishStatus;
	publishConfigurations? : KalturaLiveStreamPushPublishConfiguration[];
	currentBroadcastStartTime? : number;
	recordingOptions? : KalturaLiveEntryRecordingOptions;
}


export class KalturaLiveEntry extends KalturaMediaEntry {

    offlineMessage : string;
	recordStatus : KalturaRecordStatus;
	dvrStatus : KalturaDVRStatus;
	dvrWindow : number;
	lastElapsedRecordingTime : number;
	liveStreamConfigurations : KalturaLiveStreamConfiguration[];
	recordedEntryId : string;
	pushPublishEnabled : KalturaLivePublishStatus;
	publishConfigurations : KalturaLiveStreamPushPublishConfiguration[];
	readonly firstBroadcast : number;
	readonly lastBroadcast : number;
	currentBroadcastStartTime : number;
	recordingOptions : KalturaLiveEntryRecordingOptions;
	readonly liveStatus : KalturaEntryServerNodeStatus;

    constructor(data? : KalturaLiveEntryArgs)
    {
        super(data);
        if (typeof this.liveStreamConfigurations === 'undefined') this.liveStreamConfigurations = [];
		if (typeof this.publishConfigurations === 'undefined') this.publishConfigurations = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c' , default : 'KalturaLiveEntry' },
				offlineMessage : { type : 's'  },
				recordStatus : { type : 'en'  , subType : 'KalturaRecordStatus'},
				dvrStatus : { type : 'en'  , subType : 'KalturaDVRStatus'},
				dvrWindow : { type : 'n'  },
				lastElapsedRecordingTime : { type : 'n'  },
				liveStreamConfigurations : { type : 'a'  , subType : 'KalturaLiveStreamConfiguration'},
				recordedEntryId : { type : 's'  },
				pushPublishEnabled : { type : 'en'  , subType : 'KalturaLivePublishStatus'},
				publishConfigurations : { type : 'a'  , subType : 'KalturaLiveStreamPushPublishConfiguration'},
				firstBroadcast : { type : 'n'  , readOnly : true},
				lastBroadcast : { type : 'n'  , readOnly : true},
				currentBroadcastStartTime : { type : 'n'  },
				recordingOptions : { type : 'o'  , subType : 'KalturaLiveEntryRecordingOptions'},
				liveStatus : { type : 'en'  , readOnly : true, subType : 'KalturaEntryServerNodeStatus'}
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaLiveEntry',KalturaLiveEntry);
