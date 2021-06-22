
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaVendorCatalogItemOutputFormat } from './KalturaVendorCatalogItemOutputFormat';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaVendorCatalogItem, KalturaVendorCatalogItemArgs } from './KalturaVendorCatalogItem';

export interface KalturaVendorCaptionsCatalogItemArgs  extends KalturaVendorCatalogItemArgs {
    outputFormat? : KalturaVendorCatalogItemOutputFormat;
	enableSpeakerId? : KalturaNullableBoolean;
	fixedPriceAddons? : number;
}


export class KalturaVendorCaptionsCatalogItem extends KalturaVendorCatalogItem {

    outputFormat : KalturaVendorCatalogItemOutputFormat;
	enableSpeakerId : KalturaNullableBoolean;
	fixedPriceAddons : number;

    constructor(data? : KalturaVendorCaptionsCatalogItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaVendorCaptionsCatalogItem' },
				outputFormat : { type : 'en', subTypeConstructor : KalturaVendorCatalogItemOutputFormat, subType : 'KalturaVendorCatalogItemOutputFormat' },
				enableSpeakerId : { type : 'en', subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' },
				fixedPriceAddons : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaVendorCaptionsCatalogItem',KalturaVendorCaptionsCatalogItem);
