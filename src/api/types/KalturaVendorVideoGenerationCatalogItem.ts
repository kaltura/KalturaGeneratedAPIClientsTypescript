
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaVendorCatalogItem, KalturaVendorCatalogItemArgs } from './KalturaVendorCatalogItem';

export interface KalturaVendorVideoGenerationCatalogItemArgs  extends KalturaVendorCatalogItemArgs {
    
}


export class KalturaVendorVideoGenerationCatalogItem extends KalturaVendorCatalogItem {

    

    constructor(data? : KalturaVendorVideoGenerationCatalogItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaVendorVideoGenerationCatalogItem' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaVendorVideoGenerationCatalogItem',KalturaVendorVideoGenerationCatalogItem);
