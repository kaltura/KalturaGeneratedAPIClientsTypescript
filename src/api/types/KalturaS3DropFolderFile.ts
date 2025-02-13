
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDropFolderFile, KalturaDropFolderFileArgs } from './KalturaDropFolderFile';

export interface KalturaS3DropFolderFileArgs  extends KalturaDropFolderFileArgs {
    
}


export class KalturaS3DropFolderFile extends KalturaDropFolderFile {

    

    constructor(data? : KalturaS3DropFolderFileArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaS3DropFolderFile' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaS3DropFolderFile',KalturaS3DropFolderFile);
