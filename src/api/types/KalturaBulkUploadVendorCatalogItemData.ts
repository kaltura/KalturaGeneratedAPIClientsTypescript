
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBulkUploadObjectData, KalturaBulkUploadObjectDataArgs } from './KalturaBulkUploadObjectData';

export interface KalturaBulkUploadVendorCatalogItemDataArgs  extends KalturaBulkUploadObjectDataArgs {
    
}


export class KalturaBulkUploadVendorCatalogItemData extends KalturaBulkUploadObjectData {

    

    constructor(data? : KalturaBulkUploadVendorCatalogItemDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBulkUploadVendorCatalogItemData' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBulkUploadVendorCatalogItemData',KalturaBulkUploadVendorCatalogItemData);
