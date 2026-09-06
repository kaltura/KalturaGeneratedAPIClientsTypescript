
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaVendorCatalogItem, KalturaVendorCatalogItemArgs } from './KalturaVendorCatalogItem';

export interface KalturaVendorLlmModelsCatalogItemArgs  extends KalturaVendorCatalogItemArgs {
    
}


export class KalturaVendorLlmModelsCatalogItem extends KalturaVendorCatalogItem {

    

    constructor(data? : KalturaVendorLlmModelsCatalogItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaVendorLlmModelsCatalogItem' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaVendorLlmModelsCatalogItem',KalturaVendorLlmModelsCatalogItem);
