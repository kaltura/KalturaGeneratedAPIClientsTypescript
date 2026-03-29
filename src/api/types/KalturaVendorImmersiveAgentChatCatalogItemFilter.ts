
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaVendorCatalogItemFilter, KalturaVendorCatalogItemFilterArgs } from './KalturaVendorCatalogItemFilter';

export interface KalturaVendorImmersiveAgentChatCatalogItemFilterArgs  extends KalturaVendorCatalogItemFilterArgs {
    
}


export class KalturaVendorImmersiveAgentChatCatalogItemFilter extends KalturaVendorCatalogItemFilter {

    

    constructor(data? : KalturaVendorImmersiveAgentChatCatalogItemFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaVendorImmersiveAgentChatCatalogItemFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaVendorImmersiveAgentChatCatalogItemFilter',KalturaVendorImmersiveAgentChatCatalogItemFilter);
