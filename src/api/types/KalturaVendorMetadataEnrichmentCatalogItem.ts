
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaVendorCatalogItem, KalturaVendorCatalogItemArgs } from './KalturaVendorCatalogItem';

export interface KalturaVendorMetadataEnrichmentCatalogItemArgs  extends KalturaVendorCatalogItemArgs {
    
}


export class KalturaVendorMetadataEnrichmentCatalogItem extends KalturaVendorCatalogItem {

    

    constructor(data? : KalturaVendorMetadataEnrichmentCatalogItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaVendorMetadataEnrichmentCatalogItem' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaVendorMetadataEnrichmentCatalogItem',KalturaVendorMetadataEnrichmentCatalogItem);
