
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDropFolder, KalturaDropFolderArgs } from './KalturaDropFolder';

export interface KalturaS3DropFolderArgs  extends KalturaDropFolderArgs {
    s3Host? : string;
	s3Region? : string;
	s3UserId? : string;
	s3Password? : string;
}


export class KalturaS3DropFolder extends KalturaDropFolder {

    s3Host : string;
	s3Region : string;
	s3UserId : string;
	s3Password : string;

    constructor(data? : KalturaS3DropFolderArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaS3DropFolder' },
				s3Host : { type : 's' },
				s3Region : { type : 's' },
				s3UserId : { type : 's' },
				s3Password : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaS3DropFolder',KalturaS3DropFolder);
