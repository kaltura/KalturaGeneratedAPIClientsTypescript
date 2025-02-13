
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaVendorCatalogItem, KalturaVendorCatalogItemArgs } from './KalturaVendorCatalogItem';

export interface KalturaVendorSummaryCatalogItemArgs  extends KalturaVendorCatalogItemArgs {
    
}


export class KalturaVendorSummaryCatalogItem extends KalturaVendorCatalogItem {

    

    constructor(data? : KalturaVendorSummaryCatalogItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaVendorSummaryCatalogItem' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaVendorSummaryCatalogItem',KalturaVendorSummaryCatalogItem);
