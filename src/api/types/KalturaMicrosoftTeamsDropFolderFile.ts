
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDropFolderFile, KalturaDropFolderFileArgs } from './KalturaDropFolderFile';

export interface KalturaMicrosoftTeamsDropFolderFileArgs  extends KalturaDropFolderFileArgs {
    remoteId? : string;
	ownerId? : string;
	additionalUserIds? : string;
	description? : string;
	targetCategoryIds? : string;
	name? : string;
	contentUrl? : string;
}


export class KalturaMicrosoftTeamsDropFolderFile extends KalturaDropFolderFile {

    remoteId : string;
	ownerId : string;
	additionalUserIds : string;
	description : string;
	targetCategoryIds : string;
	name : string;
	contentUrl : string;

    constructor(data? : KalturaMicrosoftTeamsDropFolderFileArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaMicrosoftTeamsDropFolderFile' },
				remoteId : { type : 's' },
				ownerId : { type : 's' },
				additionalUserIds : { type : 's' },
				description : { type : 's' },
				targetCategoryIds : { type : 's' },
				name : { type : 's' },
				contentUrl : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaMicrosoftTeamsDropFolderFile',KalturaMicrosoftTeamsDropFolderFile);
