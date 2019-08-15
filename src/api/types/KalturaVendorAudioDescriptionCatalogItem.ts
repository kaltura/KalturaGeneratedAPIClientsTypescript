
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCatalogItemLanguage } from './KalturaCatalogItemLanguage';
import { KalturaVendorCatalogItem, KalturaVendorCatalogItemArgs } from './KalturaVendorCatalogItem';

export interface KalturaVendorAudioDescriptionCatalogItemArgs  extends KalturaVendorCatalogItemArgs {
    sourceLanguage? : KalturaCatalogItemLanguage;
	flavorParamsId? : number;
	clearAudioFlavorParamsId? : number;
}


export class KalturaVendorAudioDescriptionCatalogItem extends KalturaVendorCatalogItem {

    sourceLanguage : KalturaCatalogItemLanguage;
	flavorParamsId : number;
	clearAudioFlavorParamsId : number;

    constructor(data? : KalturaVendorAudioDescriptionCatalogItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaVendorAudioDescriptionCatalogItem' },
				sourceLanguage : { type : 'es', subTypeConstructor : KalturaCatalogItemLanguage, subType : 'KalturaCatalogItemLanguage' },
				flavorParamsId : { type : 'n' },
				clearAudioFlavorParamsId : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaVendorAudioDescriptionCatalogItem',KalturaVendorAudioDescriptionCatalogItem);
