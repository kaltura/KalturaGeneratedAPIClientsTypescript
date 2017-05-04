
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDataCenterContentResource, KalturaDataCenterContentResourceArgs } from './KalturaDataCenterContentResource';

export interface KalturaDropFolderFileResourceArgs  extends KalturaDataCenterContentResourceArgs {
    dropFolderFileId? : number;
}

/** 
* Used to ingest media that dropped through drop folder
**/
export class KalturaDropFolderFileResource extends KalturaDataCenterContentResource {

    dropFolderFileId : number;

    constructor(data? : KalturaDropFolderFileResourceArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c' , default : 'KalturaDropFolderFileResource' },
				dropFolderFileId : { type : 'n'  }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDropFolderFileResource',KalturaDropFolderFileResource);
