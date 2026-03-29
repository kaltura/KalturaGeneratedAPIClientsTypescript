
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaVendorCatalogItem, KalturaVendorCatalogItemArgs } from './KalturaVendorCatalogItem';

export interface KalturaVendorImmersiveAgentCallCatalogItemArgs  extends KalturaVendorCatalogItemArgs {
    
}


export class KalturaVendorImmersiveAgentCallCatalogItem extends KalturaVendorCatalogItem {

    

    constructor(data? : KalturaVendorImmersiveAgentCallCatalogItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaVendorImmersiveAgentCallCatalogItem' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaVendorImmersiveAgentCallCatalogItem',KalturaVendorImmersiveAgentCallCatalogItem);
