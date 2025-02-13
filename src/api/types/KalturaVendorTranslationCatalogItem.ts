
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCatalogItemLanguage } from './KalturaCatalogItemLanguage';
import { KalturaVendorCaptionsCatalogItem, KalturaVendorCaptionsCatalogItemArgs } from './KalturaVendorCaptionsCatalogItem';

export interface KalturaVendorTranslationCatalogItemArgs  extends KalturaVendorCaptionsCatalogItemArgs {
    targetLanguage? : KalturaCatalogItemLanguage;
	requireSource? : boolean;
}


export class KalturaVendorTranslationCatalogItem extends KalturaVendorCaptionsCatalogItem {

    targetLanguage : KalturaCatalogItemLanguage;
	requireSource : boolean;

    constructor(data? : KalturaVendorTranslationCatalogItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaVendorTranslationCatalogItem' },
				targetLanguage : { type : 'es', subTypeConstructor : KalturaCatalogItemLanguage, subType : 'KalturaCatalogItemLanguage' },
				requireSource : { type : 'b' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaVendorTranslationCatalogItem',KalturaVendorTranslationCatalogItem);
