
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaMarkdownProviderType } from './KalturaMarkdownProviderType';
import { KalturaAttachmentAsset, KalturaAttachmentAssetArgs } from './KalturaAttachmentAsset';

export interface KalturaMarkdownAssetArgs  extends KalturaAttachmentAssetArgs {
    accuracy? : number;
	providerType? : KalturaMarkdownProviderType;
}


export class KalturaMarkdownAsset extends KalturaAttachmentAsset {

    accuracy : number;
	providerType : KalturaMarkdownProviderType;

    constructor(data? : KalturaMarkdownAssetArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaMarkdownAsset' },
				accuracy : { type : 'n' },
				providerType : { type : 'es', subTypeConstructor : KalturaMarkdownProviderType, subType : 'KalturaMarkdownProviderType' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaMarkdownAsset',KalturaMarkdownAsset);
