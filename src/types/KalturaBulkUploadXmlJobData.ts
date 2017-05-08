
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBulkUploadJobData, KalturaBulkUploadJobDataArgs } from './KalturaBulkUploadJobData';

export interface KalturaBulkUploadXmlJobDataArgs  extends KalturaBulkUploadJobDataArgs {
    
}

/** 
* Represents the Bulk upload job data for xml bulk upload
**/
export class KalturaBulkUploadXmlJobData extends KalturaBulkUploadJobData {

    

    constructor(data? : KalturaBulkUploadXmlJobDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c' , default : 'KalturaBulkUploadXmlJobData'  }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBulkUploadXmlJobData',KalturaBulkUploadXmlJobData);
