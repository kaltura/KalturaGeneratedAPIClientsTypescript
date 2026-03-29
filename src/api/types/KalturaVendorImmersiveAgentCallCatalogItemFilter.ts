
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaVendorCatalogItemFilter, KalturaVendorCatalogItemFilterArgs } from './KalturaVendorCatalogItemFilter';

export interface KalturaVendorImmersiveAgentCallCatalogItemFilterArgs  extends KalturaVendorCatalogItemFilterArgs {
    
}


export class KalturaVendorImmersiveAgentCallCatalogItemFilter extends KalturaVendorCatalogItemFilter {

    

    constructor(data? : KalturaVendorImmersiveAgentCallCatalogItemFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaVendorImmersiveAgentCallCatalogItemFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaVendorImmersiveAgentCallCatalogItemFilter',KalturaVendorImmersiveAgentCallCatalogItemFilter);
