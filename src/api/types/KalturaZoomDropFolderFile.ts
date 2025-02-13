
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaZoomMeetingMetadata } from './KalturaZoomMeetingMetadata';
import { KalturaZoomRecordingFile } from './KalturaZoomRecordingFile';
import { KalturaDropFolderFile, KalturaDropFolderFileArgs } from './KalturaDropFolderFile';

export interface KalturaZoomDropFolderFileArgs  extends KalturaDropFolderFileArgs {
    meetingMetadata? : KalturaZoomMeetingMetadata;
	recordingFile? : KalturaZoomRecordingFile;
	parentEntryId? : string;
	isParentEntry? : boolean;
}


export class KalturaZoomDropFolderFile extends KalturaDropFolderFile {

    meetingMetadata : KalturaZoomMeetingMetadata;
	recordingFile : KalturaZoomRecordingFile;
	parentEntryId : string;
	isParentEntry : boolean;

    constructor(data? : KalturaZoomDropFolderFileArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaZoomDropFolderFile' },
				meetingMetadata : { type : 'o', subTypeConstructor : KalturaZoomMeetingMetadata, subType : 'KalturaZoomMeetingMetadata' },
				recordingFile : { type : 'o', subTypeConstructor : KalturaZoomRecordingFile, subType : 'KalturaZoomRecordingFile' },
				parentEntryId : { type : 's' },
				isParentEntry : { type : 'b' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaZoomDropFolderFile',KalturaZoomDropFolderFile);
