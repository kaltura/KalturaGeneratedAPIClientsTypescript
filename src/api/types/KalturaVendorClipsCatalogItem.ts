
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaVendorCatalogItem, KalturaVendorCatalogItemArgs } from './KalturaVendorCatalogItem';

export interface KalturaVendorClipsCatalogItemArgs  extends KalturaVendorCatalogItemArgs {
    
}


export class KalturaVendorClipsCatalogItem extends KalturaVendorCatalogItem {

    

    constructor(data? : KalturaVendorClipsCatalogItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaVendorClipsCatalogItem' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaVendorClipsCatalogItem',KalturaVendorClipsCatalogItem);
