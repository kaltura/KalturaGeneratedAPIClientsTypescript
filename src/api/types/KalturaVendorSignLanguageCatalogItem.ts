
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCatalogItemSignLanguage } from './KalturaCatalogItemSignLanguage';
import { KalturaVendorCatalogItemSignLanguageOutputFormat } from './KalturaVendorCatalogItemSignLanguageOutputFormat';
import { KalturaVendorCatalogItem, KalturaVendorCatalogItemArgs } from './KalturaVendorCatalogItem';

export interface KalturaVendorSignLanguageCatalogItemArgs  extends KalturaVendorCatalogItemArgs {
    targetLanguage? : KalturaCatalogItemSignLanguage;
	outputFormat? : KalturaVendorCatalogItemSignLanguageOutputFormat;
}


export class KalturaVendorSignLanguageCatalogItem extends KalturaVendorCatalogItem {

    targetLanguage : KalturaCatalogItemSignLanguage;
	outputFormat : KalturaVendorCatalogItemSignLanguageOutputFormat;

    constructor(data? : KalturaVendorSignLanguageCatalogItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaVendorSignLanguageCatalogItem' },
				targetLanguage : { type : 'es', subTypeConstructor : KalturaCatalogItemSignLanguage, subType : 'KalturaCatalogItemSignLanguage' },
				outputFormat : { type : 'en', subTypeConstructor : KalturaVendorCatalogItemSignLanguageOutputFormat, subType : 'KalturaVendorCatalogItemSignLanguageOutputFormat' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaVendorSignLanguageCatalogItem',KalturaVendorSignLanguageCatalogItem);
