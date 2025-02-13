
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaRecordingType } from './KalturaRecordingType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaZoomMeetingMetadataArgs  extends KalturaObjectBaseArgs {
    uuid? : string;
	meetingId? : string;
	accountId? : string;
	hostId? : string;
	topic? : string;
	meetingStartTime? : string;
	type? : KalturaRecordingType;
}


export class KalturaZoomMeetingMetadata extends KalturaObjectBase {

    uuid : string;
	meetingId : string;
	accountId : string;
	hostId : string;
	topic : string;
	meetingStartTime : string;
	type : KalturaRecordingType;

    constructor(data? : KalturaZoomMeetingMetadataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaZoomMeetingMetadata' },
				uuid : { type : 's' },
				meetingId : { type : 's' },
				accountId : { type : 's' },
				hostId : { type : 's' },
				topic : { type : 's' },
				meetingStartTime : { type : 's' },
				type : { type : 'en', subTypeConstructor : KalturaRecordingType, subType : 'KalturaRecordingType' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaZoomMeetingMetadata',KalturaZoomMeetingMetadata);
