
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaVendorCatalogItem, KalturaVendorCatalogItemArgs } from './KalturaVendorCatalogItem';

export interface KalturaVendorImmersiveAgentChatCatalogItemArgs  extends KalturaVendorCatalogItemArgs {
    
}


export class KalturaVendorImmersiveAgentChatCatalogItem extends KalturaVendorCatalogItem {

    

    constructor(data? : KalturaVendorImmersiveAgentChatCatalogItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaVendorImmersiveAgentChatCatalogItem' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaVendorImmersiveAgentChatCatalogItem',KalturaVendorImmersiveAgentChatCatalogItem);
