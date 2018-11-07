
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBulkUploadXmlJobData, KalturaBulkUploadXmlJobDataArgs } from './KalturaBulkUploadXmlJobData';

export interface KalturaDropFolderXmlBulkUploadJobDataArgs  extends KalturaBulkUploadXmlJobDataArgs {
    dropFolderId? : number;
}


export class KalturaDropFolderXmlBulkUploadJobData extends KalturaBulkUploadXmlJobData {

    dropFolderId : number;

    constructor(data? : KalturaDropFolderXmlBulkUploadJobDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDropFolderXmlBulkUploadJobData' },
				dropFolderId : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDropFolderXmlBulkUploadJobData',KalturaDropFolderXmlBulkUploadJobData);
