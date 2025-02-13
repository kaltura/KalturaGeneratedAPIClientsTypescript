
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaVendorLiveCatalogItem, KalturaVendorLiveCatalogItemArgs } from './KalturaVendorLiveCatalogItem';

export interface KalturaVendorLiveCaptionCatalogItemArgs  extends KalturaVendorLiveCatalogItemArgs {
    
}


export class KalturaVendorLiveCaptionCatalogItem extends KalturaVendorLiveCatalogItem {

    

    constructor(data? : KalturaVendorLiveCaptionCatalogItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaVendorLiveCaptionCatalogItem' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaVendorLiveCaptionCatalogItem',KalturaVendorLiveCaptionCatalogItem);
