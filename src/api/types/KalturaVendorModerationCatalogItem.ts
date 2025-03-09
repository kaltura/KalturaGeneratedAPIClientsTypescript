
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaVendorCatalogItem, KalturaVendorCatalogItemArgs } from './KalturaVendorCatalogItem';

export interface KalturaVendorModerationCatalogItemArgs  extends KalturaVendorCatalogItemArgs {
    
}


export class KalturaVendorModerationCatalogItem extends KalturaVendorCatalogItem {

    

    constructor(data? : KalturaVendorModerationCatalogItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaVendorModerationCatalogItem' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaVendorModerationCatalogItem',KalturaVendorModerationCatalogItem);
