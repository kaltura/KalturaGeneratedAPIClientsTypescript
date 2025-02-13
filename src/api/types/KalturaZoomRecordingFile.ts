
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaRecordingFileType } from './KalturaRecordingFileType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaZoomRecordingFileArgs  extends KalturaObjectBaseArgs {
    id? : string;
	recordingStart? : string;
	fileType? : KalturaRecordingFileType;
	downloadUrl? : string;
	fileExtension? : string;
	downloadToken? : string;
}


export class KalturaZoomRecordingFile extends KalturaObjectBase {

    id : string;
	recordingStart : string;
	fileType : KalturaRecordingFileType;
	downloadUrl : string;
	fileExtension : string;
	downloadToken : string;

    constructor(data? : KalturaZoomRecordingFileArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaZoomRecordingFile' },
				id : { type : 's' },
				recordingStart : { type : 's' },
				fileType : { type : 'en', subTypeConstructor : KalturaRecordingFileType, subType : 'KalturaRecordingFileType' },
				downloadUrl : { type : 's' },
				fileExtension : { type : 's' },
				downloadToken : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaZoomRecordingFile',KalturaZoomRecordingFile);
