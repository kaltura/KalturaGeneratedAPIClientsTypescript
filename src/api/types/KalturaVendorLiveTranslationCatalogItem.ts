
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCatalogItemLanguage } from './KalturaCatalogItemLanguage';
import { KalturaVendorLiveCatalogItem, KalturaVendorLiveCatalogItemArgs } from './KalturaVendorLiveCatalogItem';

export interface KalturaVendorLiveTranslationCatalogItemArgs  extends KalturaVendorLiveCatalogItemArgs {
    targetLanguage? : KalturaCatalogItemLanguage;
}


export class KalturaVendorLiveTranslationCatalogItem extends KalturaVendorLiveCatalogItem {

    targetLanguage : KalturaCatalogItemLanguage;

    constructor(data? : KalturaVendorLiveTranslationCatalogItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaVendorLiveTranslationCatalogItem' },
				targetLanguage : { type : 'es', subTypeConstructor : KalturaCatalogItemLanguage, subType : 'KalturaCatalogItemLanguage' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaVendorLiveTranslationCatalogItem',KalturaVendorLiveTranslationCatalogItem);
