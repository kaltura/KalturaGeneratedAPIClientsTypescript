
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaVendorDubbingCatalogItemBaseFilter, KalturaVendorDubbingCatalogItemBaseFilterArgs } from './KalturaVendorDubbingCatalogItemBaseFilter';

export interface KalturaVendorDubbingCatalogItemFilterArgs  extends KalturaVendorDubbingCatalogItemBaseFilterArgs {
    
}


export class KalturaVendorDubbingCatalogItemFilter extends KalturaVendorDubbingCatalogItemBaseFilter {

    

    constructor(data? : KalturaVendorDubbingCatalogItemFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaVendorDubbingCatalogItemFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaVendorDubbingCatalogItemFilter',KalturaVendorDubbingCatalogItemFilter);
