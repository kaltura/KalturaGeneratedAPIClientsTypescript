
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaTranscriptProviderType } from './KalturaTranscriptProviderType';
import { KalturaTextualAttachmentAsset, KalturaTextualAttachmentAssetArgs } from './KalturaTextualAttachmentAsset';

export interface KalturaTranscriptAssetArgs  extends KalturaTextualAttachmentAssetArgs {
    accuracy? : number;
	providerType? : KalturaTranscriptProviderType;
}


export class KalturaTranscriptAsset extends KalturaTextualAttachmentAsset {

    accuracy : number;
	providerType : KalturaTranscriptProviderType;

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
                objectType : { type : 'c', default : 'KalturaTranscriptAsset' },
				accuracy : { type : 'n' },
				providerType : { type : 'es', subTypeConstructor : KalturaTranscriptProviderType, subType : 'KalturaTranscriptProviderType' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaTranscriptAsset',KalturaTranscriptAsset);
