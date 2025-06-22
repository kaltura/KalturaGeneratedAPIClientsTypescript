
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaVendorDubbingCatalogItemBaseFilter, KalturaVendorDubbingCatalogItemBaseFilterArgs } from './KalturaVendorDubbingCatalogItemBaseFilter';

export interface KalturaVendorSignLanguageCatalogItemFilterArgs  extends KalturaVendorDubbingCatalogItemBaseFilterArgs {
    
}


export class KalturaVendorSignLanguageCatalogItemFilter extends KalturaVendorDubbingCatalogItemBaseFilter {

    

    constructor(data? : KalturaVendorSignLanguageCatalogItemFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaVendorSignLanguageCatalogItemFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaVendorSignLanguageCatalogItemFilter',KalturaVendorSignLanguageCatalogItemFilter);
