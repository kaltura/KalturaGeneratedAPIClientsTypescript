
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDropFolderFile, KalturaDropFolderFileArgs } from './KalturaDropFolderFile';

export interface KalturaWebexAPIDropFolderFileArgs  extends KalturaDropFolderFileArgs {
    recordingId? : string;
	description? : string;
	contentUrl? : string;
	urlExpiry? : number;
	fileExtension? : string;
	meetingId? : string;
	recordingStartTime? : number;
	hostEmail? : string;
}


export class KalturaWebexAPIDropFolderFile extends KalturaDropFolderFile {

    recordingId : string;
	description : string;
	contentUrl : string;
	urlExpiry : number;
	fileExtension : string;
	meetingId : string;
	recordingStartTime : number;
	hostEmail : string;

    constructor(data? : KalturaWebexAPIDropFolderFileArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaWebexAPIDropFolderFile' },
				recordingId : { type : 's' },
				description : { type : 's' },
				contentUrl : { type : 's' },
				urlExpiry : { type : 'n' },
				fileExtension : { type : 's' },
				meetingId : { type : 's' },
				recordingStartTime : { type : 'n' },
				hostEmail : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaWebexAPIDropFolderFile',KalturaWebexAPIDropFolderFile);
