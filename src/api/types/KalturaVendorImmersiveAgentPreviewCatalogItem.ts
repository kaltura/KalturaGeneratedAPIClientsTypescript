
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaVendorCatalogItem, KalturaVendorCatalogItemArgs } from './KalturaVendorCatalogItem';

export interface KalturaVendorImmersiveAgentPreviewCatalogItemArgs  extends KalturaVendorCatalogItemArgs {
    
}


export class KalturaVendorImmersiveAgentPreviewCatalogItem extends KalturaVendorCatalogItem {

    

    constructor(data? : KalturaVendorImmersiveAgentPreviewCatalogItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaVendorImmersiveAgentPreviewCatalogItem' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaVendorImmersiveAgentPreviewCatalogItem',KalturaVendorImmersiveAgentPreviewCatalogItem);
