
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaLanguage } from './KalturaLanguage';
import { KalturaAttachmentAsset, KalturaAttachmentAssetArgs } from './KalturaAttachmentAsset';

export interface KalturaTranscriptAssetArgs  extends KalturaAttachmentAssetArgs {
    accuracy? : number;
	humanVerified? : KalturaNullableBoolean;
	language? : KalturaLanguage;
}


export class KalturaTranscriptAsset extends KalturaAttachmentAsset {

    accuracy : number;
	humanVerified : KalturaNullableBoolean;
	language : KalturaLanguage;

    constructor(data? : KalturaTranscriptAssetArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c' , default : 'KalturaTranscriptAsset' },
				accuracy : { type : 'n'  },
				humanVerified : { type : 'en'  , subType : 'KalturaNullableBoolean'},
				language : { type : 'es'  , subType : 'KalturaLanguage'}
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaTranscriptAsset',KalturaTranscriptAsset);
