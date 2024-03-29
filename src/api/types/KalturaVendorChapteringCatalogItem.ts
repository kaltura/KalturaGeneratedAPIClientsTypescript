
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaVendorCatalogItem, KalturaVendorCatalogItemArgs } from './KalturaVendorCatalogItem';

export interface KalturaVendorChapteringCatalogItemArgs  extends KalturaVendorCatalogItemArgs {
    
}


export class KalturaVendorChapteringCatalogItem extends KalturaVendorCatalogItem {

    

    constructor(data? : KalturaVendorChapteringCatalogItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaVendorChapteringCatalogItem' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaVendorChapteringCatalogItem',KalturaVendorChapteringCatalogItem);
