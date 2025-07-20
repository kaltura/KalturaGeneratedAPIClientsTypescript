
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaTextualAttachmentAssetFilter, KalturaTextualAttachmentAssetFilterArgs } from './KalturaTextualAttachmentAssetFilter';

export interface KalturaMarkdownAssetBaseFilterArgs  extends KalturaTextualAttachmentAssetFilterArgs {
    
}


export class KalturaMarkdownAssetBaseFilter extends KalturaTextualAttachmentAssetFilter {

    

    constructor(data? : KalturaMarkdownAssetBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaMarkdownAssetBaseFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaMarkdownAssetBaseFilter',KalturaMarkdownAssetBaseFilter);
