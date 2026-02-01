
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaVendorCatalogItem, KalturaVendorCatalogItemArgs } from './KalturaVendorCatalogItem';

export interface KalturaVendorSpeechToVideoCatalogItemArgs  extends KalturaVendorCatalogItemArgs {
    
}


export class KalturaVendorSpeechToVideoCatalogItem extends KalturaVendorCatalogItem {

    

    constructor(data? : KalturaVendorSpeechToVideoCatalogItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaVendorSpeechToVideoCatalogItem' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaVendorSpeechToVideoCatalogItem',KalturaVendorSpeechToVideoCatalogItem);
