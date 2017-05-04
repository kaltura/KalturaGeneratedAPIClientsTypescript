
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaLanguage } from './KalturaLanguage';
import { KalturaLanguageCode } from './KalturaLanguageCode';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaCaptionType } from './KalturaCaptionType';
import { KalturaCaptionAssetStatus } from './KalturaCaptionAssetStatus';
import { KalturaAsset, KalturaAssetArgs } from './KalturaAsset';

export interface KalturaCaptionAssetArgs  extends KalturaAssetArgs {
    captionParamsId? : number;
	language? : KalturaLanguage;
	isDefault? : KalturaNullableBoolean;
	label? : string;
	format? : KalturaCaptionType;
	parentId? : string;
	accuracy? : number;
}


export class KalturaCaptionAsset extends KalturaAsset {

    captionParamsId : number;
	language : KalturaLanguage;
	readonly languageCode : KalturaLanguageCode;
	isDefault : KalturaNullableBoolean;
	label : string;
	format : KalturaCaptionType;
	readonly status : KalturaCaptionAssetStatus;
	parentId : string;
	accuracy : number;

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
                objectType : { type : 'c' , default : 'KalturaCaptionAsset' },
				captionParamsId : { type : 'n'  },
				language : { type : 'es'  , subType : 'KalturaLanguage'},
				languageCode : { type : 'es'  , readOnly : true, subType : 'KalturaLanguageCode'},
				isDefault : { type : 'en'  , subType : 'KalturaNullableBoolean'},
				label : { type : 's'  },
				format : { type : 'es'  , subType : 'KalturaCaptionType'},
				status : { type : 'en'  , readOnly : true, subType : 'KalturaCaptionAssetStatus'},
				parentId : { type : 's'  },
				accuracy : { type : 'n'  }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCaptionAsset',KalturaCaptionAsset);
