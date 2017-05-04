
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBulkUploadObjectData, KalturaBulkUploadObjectDataArgs } from './KalturaBulkUploadObjectData';

export interface KalturaBulkUploadCategoryEntryDataArgs  extends KalturaBulkUploadObjectDataArgs {
    
}

/** 
* This class represents object-specific data passed to the   bulk upload job.
**/
export class KalturaBulkUploadCategoryEntryData extends KalturaBulkUploadObjectData {

    

    constructor(data? : KalturaBulkUploadCategoryEntryDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c' , default : 'KalturaBulkUploadCategoryEntryData' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBulkUploadCategoryEntryData',KalturaBulkUploadCategoryEntryData);
