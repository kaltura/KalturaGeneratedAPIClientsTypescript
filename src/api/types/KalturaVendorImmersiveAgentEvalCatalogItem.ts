
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaVendorCatalogItem, KalturaVendorCatalogItemArgs } from './KalturaVendorCatalogItem';

export interface KalturaVendorImmersiveAgentEvalCatalogItemArgs  extends KalturaVendorCatalogItemArgs {
    
}


export class KalturaVendorImmersiveAgentEvalCatalogItem extends KalturaVendorCatalogItem {

    

    constructor(data? : KalturaVendorImmersiveAgentEvalCatalogItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaVendorImmersiveAgentEvalCatalogItem' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaVendorImmersiveAgentEvalCatalogItem',KalturaVendorImmersiveAgentEvalCatalogItem);
