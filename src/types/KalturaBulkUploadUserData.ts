
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBulkUploadObjectData, KalturaBulkUploadObjectDataArgs } from './KalturaBulkUploadObjectData';

export interface KalturaBulkUploadUserDataArgs  extends KalturaBulkUploadObjectDataArgs {
    
}

/** 
* This class represents object-specific data passed to the   bulk upload job.
**/
export class KalturaBulkUploadUserData extends KalturaBulkUploadObjectData {

    

    constructor(data? : KalturaBulkUploadUserDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c' , default : 'KalturaBulkUploadUserData'  }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBulkUploadUserData',KalturaBulkUploadUserData);
