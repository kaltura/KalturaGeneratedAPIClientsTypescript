
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaVendorCatalogItemFilter, KalturaVendorCatalogItemFilterArgs } from './KalturaVendorCatalogItemFilter';

export interface KalturaVendorImmersiveAgentPreviewCatalogItemFilterArgs  extends KalturaVendorCatalogItemFilterArgs {
    
}


export class KalturaVendorImmersiveAgentPreviewCatalogItemFilter extends KalturaVendorCatalogItemFilter {

    

    constructor(data? : KalturaVendorImmersiveAgentPreviewCatalogItemFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaVendorImmersiveAgentPreviewCatalogItemFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaVendorImmersiveAgentPreviewCatalogItemFilter',KalturaVendorImmersiveAgentPreviewCatalogItemFilter);
