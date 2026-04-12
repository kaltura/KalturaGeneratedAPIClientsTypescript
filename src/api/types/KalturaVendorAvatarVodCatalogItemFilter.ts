
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaVendorCatalogItemFilter, KalturaVendorCatalogItemFilterArgs } from './KalturaVendorCatalogItemFilter';

export interface KalturaVendorAvatarVodCatalogItemFilterArgs  extends KalturaVendorCatalogItemFilterArgs {
    
}


export class KalturaVendorAvatarVodCatalogItemFilter extends KalturaVendorCatalogItemFilter {

    

    constructor(data? : KalturaVendorAvatarVodCatalogItemFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaVendorAvatarVodCatalogItemFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaVendorAvatarVodCatalogItemFilter',KalturaVendorAvatarVodCatalogItemFilter);
