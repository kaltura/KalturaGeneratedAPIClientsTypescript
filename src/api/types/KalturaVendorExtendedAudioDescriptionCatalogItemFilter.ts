
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaVendorCaptionsCatalogItemBaseFilter, KalturaVendorCaptionsCatalogItemBaseFilterArgs } from './KalturaVendorCaptionsCatalogItemBaseFilter';

export interface KalturaVendorExtendedAudioDescriptionCatalogItemFilterArgs  extends KalturaVendorCaptionsCatalogItemBaseFilterArgs {
    
}


export class KalturaVendorExtendedAudioDescriptionCatalogItemFilter extends KalturaVendorCaptionsCatalogItemBaseFilter {

    

    constructor(data? : KalturaVendorExtendedAudioDescriptionCatalogItemFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaVendorExtendedAudioDescriptionCatalogItemFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaVendorExtendedAudioDescriptionCatalogItemFilter',KalturaVendorExtendedAudioDescriptionCatalogItemFilter);
