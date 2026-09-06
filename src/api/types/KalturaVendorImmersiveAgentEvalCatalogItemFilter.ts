
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaVendorCatalogItemFilter, KalturaVendorCatalogItemFilterArgs } from './KalturaVendorCatalogItemFilter';

export interface KalturaVendorImmersiveAgentEvalCatalogItemFilterArgs  extends KalturaVendorCatalogItemFilterArgs {
    
}


export class KalturaVendorImmersiveAgentEvalCatalogItemFilter extends KalturaVendorCatalogItemFilter {

    

    constructor(data? : KalturaVendorImmersiveAgentEvalCatalogItemFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaVendorImmersiveAgentEvalCatalogItemFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaVendorImmersiveAgentEvalCatalogItemFilter',KalturaVendorImmersiveAgentEvalCatalogItemFilter);
