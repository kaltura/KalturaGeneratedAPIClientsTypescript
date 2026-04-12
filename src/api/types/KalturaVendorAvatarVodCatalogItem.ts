
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaVendorCatalogItem, KalturaVendorCatalogItemArgs } from './KalturaVendorCatalogItem';

export interface KalturaVendorAvatarVodCatalogItemArgs  extends KalturaVendorCatalogItemArgs {
    
}


export class KalturaVendorAvatarVodCatalogItem extends KalturaVendorCatalogItem {

    

    constructor(data? : KalturaVendorAvatarVodCatalogItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaVendorAvatarVodCatalogItem' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaVendorAvatarVodCatalogItem',KalturaVendorAvatarVodCatalogItem);
