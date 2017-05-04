
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaBulkUploadObjectDataArgs  extends KalturaObjectBaseArgs {
    
}

/** 
* This class represents object-specific data passed to the   bulk upload job.
**/
export class KalturaBulkUploadObjectData extends KalturaObjectBase {

    

    constructor(data? : KalturaBulkUploadObjectDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c' , default : 'KalturaBulkUploadObjectData' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBulkUploadObjectData',KalturaBulkUploadObjectData);
