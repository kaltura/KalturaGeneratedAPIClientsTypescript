
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaVendorCatalogItem, KalturaVendorCatalogItemArgs } from './KalturaVendorCatalogItem';

export interface KalturaVendorQuizCatalogItemArgs  extends KalturaVendorCatalogItemArgs {
    
}


export class KalturaVendorQuizCatalogItem extends KalturaVendorCatalogItem {

    

    constructor(data? : KalturaVendorQuizCatalogItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaVendorQuizCatalogItem' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaVendorQuizCatalogItem',KalturaVendorQuizCatalogItem);
