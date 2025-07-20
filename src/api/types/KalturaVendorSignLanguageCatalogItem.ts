
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCatalogItemSignLanguage } from './KalturaCatalogItemSignLanguage';
import { KalturaVendorCatalogItem, KalturaVendorCatalogItemArgs } from './KalturaVendorCatalogItem';

export interface KalturaVendorSignLanguageCatalogItemArgs  extends KalturaVendorCatalogItemArgs {
    targetLanguage? : KalturaCatalogItemSignLanguage;
}


export class KalturaVendorSignLanguageCatalogItem extends KalturaVendorCatalogItem {

    targetLanguage : KalturaCatalogItemSignLanguage;

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
				targetLanguage : { type : 'es', subTypeConstructor : KalturaCatalogItemSignLanguage, subType : 'KalturaCatalogItemSignLanguage' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaVendorSignLanguageCatalogItem',KalturaVendorSignLanguageCatalogItem);
