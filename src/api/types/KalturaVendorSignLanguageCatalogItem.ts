
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCatalogItemLanguage } from './KalturaCatalogItemLanguage';
import { KalturaVendorCatalogItem, KalturaVendorCatalogItemArgs } from './KalturaVendorCatalogItem';

export interface KalturaVendorSignLanguageCatalogItemArgs  extends KalturaVendorCatalogItemArgs {
    targetLanguage? : KalturaCatalogItemLanguage;
}


export class KalturaVendorSignLanguageCatalogItem extends KalturaVendorCatalogItem {

    targetLanguage : KalturaCatalogItemLanguage;

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
				targetLanguage : { type : 'es', subTypeConstructor : KalturaCatalogItemLanguage, subType : 'KalturaCatalogItemLanguage' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaVendorSignLanguageCatalogItem',KalturaVendorSignLanguageCatalogItem);
