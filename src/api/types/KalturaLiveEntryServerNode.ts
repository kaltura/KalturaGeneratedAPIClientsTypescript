
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaLiveStreamParams } from './KalturaLiveStreamParams';
import { KalturaLiveEntryServerNodeRecordingInfo } from './KalturaLiveEntryServerNodeRecordingInfo';
import { KalturaViewMode } from './KalturaViewMode';
import { KalturaEntryServerNode, KalturaEntryServerNodeArgs } from './KalturaEntryServerNode';

export interface KalturaLiveEntryServerNodeArgs  extends KalturaEntryServerNodeArgs {
    streams? : KalturaLiveStreamParams[];
	recordingInfo? : KalturaLiveEntryServerNodeRecordingInfo[];
	isPlayableUser? : boolean;
	viewMode? : KalturaViewMode;
	featuresUpdatedAt? : Date;
	viewModeUpdatedAt? : Date;
}


export class KalturaLiveEntryServerNode extends KalturaEntryServerNode {

    streams : KalturaLiveStreamParams[];
	recordingInfo : KalturaLiveEntryServerNodeRecordingInfo[];
	isPlayableUser : boolean;
	viewMode : KalturaViewMode;
	featuresUpdatedAt : Date;
	viewModeUpdatedAt : Date;

    constructor(data? : KalturaLiveEntryServerNodeArgs)
    {
        super(data);
        if (typeof this.streams === 'undefined') this.streams = [];
		if (typeof this.recordingInfo === 'undefined') this.recordingInfo = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLiveEntryServerNode' },
				streams : { type : 'a', subTypeConstructor : KalturaLiveStreamParams, subType : 'KalturaLiveStreamParams' },
				recordingInfo : { type : 'a', subTypeConstructor : KalturaLiveEntryServerNodeRecordingInfo, subType : 'KalturaLiveEntryServerNodeRecordingInfo' },
				isPlayableUser : { type : 'b' },
				viewMode : { type : 'en', subTypeConstructor : KalturaViewMode, subType : 'KalturaViewMode' },
				featuresUpdatedAt : { type : 'd' },
				viewModeUpdatedAt : { type : 'd' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaLiveEntryServerNode',KalturaLiveEntryServerNode);
