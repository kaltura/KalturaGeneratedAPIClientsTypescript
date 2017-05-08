
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBulkUploadObjectData, KalturaBulkUploadObjectDataArgs } from './KalturaBulkUploadObjectData';

export interface KalturaBulkUploadCategoryUserDataArgs  extends KalturaBulkUploadObjectDataArgs {
    
}

/** 
* This class represents object-specific data passed to the   bulk upload job.
**/
export class KalturaBulkUploadCategoryUserData extends KalturaBulkUploadObjectData {

    

    constructor(data? : KalturaBulkUploadCategoryUserDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBulkUploadCategoryUserData' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBulkUploadCategoryUserData',KalturaBulkUploadCategoryUserData);
