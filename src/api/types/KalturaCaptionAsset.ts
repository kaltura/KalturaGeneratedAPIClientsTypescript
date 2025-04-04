
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaLanguage } from './KalturaLanguage';
import { KalturaLanguageCode } from './KalturaLanguageCode';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaCaptionType } from './KalturaCaptionType';
import { KalturaCaptionSource } from './KalturaCaptionSource';
import { KalturaCaptionAssetStatus } from './KalturaCaptionAssetStatus';
import { KalturaCaptionAssetUsage } from './KalturaCaptionAssetUsage';
import { KalturaAsset, KalturaAssetArgs } from './KalturaAsset';

export interface KalturaCaptionAssetArgs  extends KalturaAssetArgs {
    captionParamsId? : number;
	language? : KalturaLanguage;
	isDefault? : KalturaNullableBoolean;
	label? : string;
	format? : KalturaCaptionType;
	source? : KalturaCaptionSource;
	parentId? : string;
	accuracy? : number;
	displayOnPlayer? : boolean;
	associatedTranscriptIds? : string;
	usage? : KalturaCaptionAssetUsage;
}


export class KalturaCaptionAsset extends KalturaAsset {

    captionParamsId : number;
	language : KalturaLanguage;
	readonly languageCode : KalturaLanguageCode;
	isDefault : KalturaNullableBoolean;
	label : string;
	format : KalturaCaptionType;
	source : KalturaCaptionSource;
	readonly status : KalturaCaptionAssetStatus;
	parentId : string;
	accuracy : number;
	displayOnPlayer : boolean;
	associatedTranscriptIds : string;
	usage : KalturaCaptionAssetUsage;

    constructor(data? : KalturaCaptionAssetArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCaptionAsset' },
				captionParamsId : { type : 'n' },
				language : { type : 'es', subTypeConstructor : KalturaLanguage, subType : 'KalturaLanguage' },
				languageCode : { type : 'es', readOnly : true, subTypeConstructor : KalturaLanguageCode, subType : 'KalturaLanguageCode' },
				isDefault : { type : 'en', subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' },
				label : { type : 's' },
				format : { type : 'es', subTypeConstructor : KalturaCaptionType, subType : 'KalturaCaptionType' },
				source : { type : 'es', subTypeConstructor : KalturaCaptionSource, subType : 'KalturaCaptionSource' },
				status : { type : 'en', readOnly : true, subTypeConstructor : KalturaCaptionAssetStatus, subType : 'KalturaCaptionAssetStatus' },
				parentId : { type : 's' },
				accuracy : { type : 'n' },
				displayOnPlayer : { type : 'b' },
				associatedTranscriptIds : { type : 's' },
				usage : { type : 'es', subTypeConstructor : KalturaCaptionAssetUsage, subType : 'KalturaCaptionAssetUsage' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCaptionAsset',KalturaCaptionAsset);
