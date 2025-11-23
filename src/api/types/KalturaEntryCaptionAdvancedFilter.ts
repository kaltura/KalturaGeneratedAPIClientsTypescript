
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaLanguage } from './KalturaLanguage';
import { KalturaCaptionAssetUsage } from './KalturaCaptionAssetUsage';
import { KalturaSearchItem, KalturaSearchItemArgs } from './KalturaSearchItem';

export interface KalturaEntryCaptionAdvancedFilterArgs  extends KalturaSearchItemArgs {
    hasCaption? : KalturaNullableBoolean;
	language? : KalturaLanguage;
	accuracyGreaterThanOrEqual? : number;
	accuracyLessThanOrEqual? : number;
	accuracyGreaterThan? : number;
	accuracyLessThan? : number;
	usage? : KalturaCaptionAssetUsage;
}


export class KalturaEntryCaptionAdvancedFilter extends KalturaSearchItem {

    hasCaption : KalturaNullableBoolean;
	language : KalturaLanguage;
	accuracyGreaterThanOrEqual : number;
	accuracyLessThanOrEqual : number;
	accuracyGreaterThan : number;
	accuracyLessThan : number;
	usage : KalturaCaptionAssetUsage;

    constructor(data? : KalturaEntryCaptionAdvancedFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaEntryCaptionAdvancedFilter' },
				hasCaption : { type : 'en', subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' },
				language : { type : 'es', subTypeConstructor : KalturaLanguage, subType : 'KalturaLanguage' },
				accuracyGreaterThanOrEqual : { type : 'n' },
				accuracyLessThanOrEqual : { type : 'n' },
				accuracyGreaterThan : { type : 'n' },
				accuracyLessThan : { type : 'n' },
				usage : { type : 'es', subTypeConstructor : KalturaCaptionAssetUsage, subType : 'KalturaCaptionAssetUsage' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaEntryCaptionAdvancedFilter',KalturaEntryCaptionAdvancedFilter);
