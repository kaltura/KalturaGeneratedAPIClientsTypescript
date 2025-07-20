
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaLanguage } from './KalturaLanguage';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaAttachmentAsset, KalturaAttachmentAssetArgs } from './KalturaAttachmentAsset';

export interface KalturaTextualAttachmentAssetArgs  extends KalturaAttachmentAssetArgs {
    language? : KalturaLanguage;
	humanVerified? : KalturaNullableBoolean;
}


export class KalturaTextualAttachmentAsset extends KalturaAttachmentAsset {

    language : KalturaLanguage;
	humanVerified : KalturaNullableBoolean;

    constructor(data? : KalturaTextualAttachmentAssetArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaTextualAttachmentAsset' },
				language : { type : 'es', subTypeConstructor : KalturaLanguage, subType : 'KalturaLanguage' },
				humanVerified : { type : 'en', subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaTextualAttachmentAsset',KalturaTextualAttachmentAsset);
