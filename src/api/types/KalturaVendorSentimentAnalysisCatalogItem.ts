
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaVendorCatalogItem, KalturaVendorCatalogItemArgs } from './KalturaVendorCatalogItem';

export interface KalturaVendorSentimentAnalysisCatalogItemArgs  extends KalturaVendorCatalogItemArgs {
    
}


export class KalturaVendorSentimentAnalysisCatalogItem extends KalturaVendorCatalogItem {

    

    constructor(data? : KalturaVendorSentimentAnalysisCatalogItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaVendorSentimentAnalysisCatalogItem' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaVendorSentimentAnalysisCatalogItem',KalturaVendorSentimentAnalysisCatalogItem);
