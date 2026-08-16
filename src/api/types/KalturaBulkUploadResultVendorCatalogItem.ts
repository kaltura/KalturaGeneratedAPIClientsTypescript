
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaVendorServiceFeature } from './KalturaVendorServiceFeature';
import { KalturaVendorServiceType } from './KalturaVendorServiceType';
import { KalturaVendorServiceTurnAroundTime } from './KalturaVendorServiceTurnAroundTime';
import { KalturaCatalogItemLanguage } from './KalturaCatalogItemLanguage';
import { KalturaVendorCatalogItemOutputFormat } from './KalturaVendorCatalogItemOutputFormat';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaVendorCatalogItemPricing } from './KalturaVendorCatalogItemPricing';
import { KalturaVendorCatalogItemUnitPricing } from './KalturaVendorCatalogItemUnitPricing';
import { KalturaBulkUploadResult, KalturaBulkUploadResultArgs } from './KalturaBulkUploadResult';

export interface KalturaBulkUploadResultVendorCatalogItemArgs  extends KalturaBulkUploadResultArgs {
    vendorCatalogItemId? : number;
	vendorPartnerId? : number;
	name? : string;
	systemName? : string;
	serviceFeature? : KalturaVendorServiceFeature;
	serviceType? : KalturaVendorServiceType;
	turnAroundTime? : KalturaVendorServiceTurnAroundTime;
	sourceLanguage? : KalturaCatalogItemLanguage;
	targetLanguage? : KalturaCatalogItemLanguage;
	outputFormat? : KalturaVendorCatalogItemOutputFormat;
	enableSpeakerId? : KalturaNullableBoolean;
	fixedPriceAddons? : number;
	pricing? : KalturaVendorCatalogItemPricing;
	pricingArray? : KalturaVendorCatalogItemUnitPricing[];
	flavorParamsId? : number;
	clearAudioFlavorParamsId? : number;
	vendorData? : string;
}


export class KalturaBulkUploadResultVendorCatalogItem extends KalturaBulkUploadResult {

    vendorCatalogItemId : number;
	vendorPartnerId : number;
	name : string;
	systemName : string;
	serviceFeature : KalturaVendorServiceFeature;
	serviceType : KalturaVendorServiceType;
	turnAroundTime : KalturaVendorServiceTurnAroundTime;
	sourceLanguage : KalturaCatalogItemLanguage;
	targetLanguage : KalturaCatalogItemLanguage;
	outputFormat : KalturaVendorCatalogItemOutputFormat;
	enableSpeakerId : KalturaNullableBoolean;
	fixedPriceAddons : number;
	pricing : KalturaVendorCatalogItemPricing;
	pricingArray : KalturaVendorCatalogItemUnitPricing[];
	flavorParamsId : number;
	clearAudioFlavorParamsId : number;
	vendorData : string;

    constructor(data? : KalturaBulkUploadResultVendorCatalogItemArgs)
    {
        super(data);
        if (typeof this.pricingArray === 'undefined') this.pricingArray = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBulkUploadResultVendorCatalogItem' },
				vendorCatalogItemId : { type : 'n' },
				vendorPartnerId : { type : 'n' },
				name : { type : 's' },
				systemName : { type : 's' },
				serviceFeature : { type : 'en', subTypeConstructor : KalturaVendorServiceFeature, subType : 'KalturaVendorServiceFeature' },
				serviceType : { type : 'en', subTypeConstructor : KalturaVendorServiceType, subType : 'KalturaVendorServiceType' },
				turnAroundTime : { type : 'en', subTypeConstructor : KalturaVendorServiceTurnAroundTime, subType : 'KalturaVendorServiceTurnAroundTime' },
				sourceLanguage : { type : 'es', subTypeConstructor : KalturaCatalogItemLanguage, subType : 'KalturaCatalogItemLanguage' },
				targetLanguage : { type : 'es', subTypeConstructor : KalturaCatalogItemLanguage, subType : 'KalturaCatalogItemLanguage' },
				outputFormat : { type : 'en', subTypeConstructor : KalturaVendorCatalogItemOutputFormat, subType : 'KalturaVendorCatalogItemOutputFormat' },
				enableSpeakerId : { type : 'en', subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' },
				fixedPriceAddons : { type : 'n' },
				pricing : { type : 'o', subTypeConstructor : KalturaVendorCatalogItemPricing, subType : 'KalturaVendorCatalogItemPricing' },
				pricingArray : { type : 'a', subTypeConstructor : KalturaVendorCatalogItemUnitPricing, subType : 'KalturaVendorCatalogItemUnitPricing' },
				flavorParamsId : { type : 'n' },
				clearAudioFlavorParamsId : { type : 'n' },
				vendorData : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBulkUploadResultVendorCatalogItem',KalturaBulkUploadResultVendorCatalogItem);
