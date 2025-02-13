
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaVendorTranslationCatalogItemBaseFilter, KalturaVendorTranslationCatalogItemBaseFilterArgs } from './KalturaVendorTranslationCatalogItemBaseFilter';

export interface KalturaVendorLiveTranslationCatalogItemFilterArgs  extends KalturaVendorTranslationCatalogItemBaseFilterArgs {
    
}


export class KalturaVendorLiveTranslationCatalogItemFilter extends KalturaVendorTranslationCatalogItemBaseFilter {

    

    constructor(data? : KalturaVendorLiveTranslationCatalogItemFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaVendorLiveTranslationCatalogItemFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaVendorLiveTranslationCatalogItemFilter',KalturaVendorLiveTranslationCatalogItemFilter);
