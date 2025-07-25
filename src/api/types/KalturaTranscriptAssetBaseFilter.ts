
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaTextualAttachmentAssetFilter, KalturaTextualAttachmentAssetFilterArgs } from './KalturaTextualAttachmentAssetFilter';

export interface KalturaTranscriptAssetBaseFilterArgs  extends KalturaTextualAttachmentAssetFilterArgs {
    
}


export class KalturaTranscriptAssetBaseFilter extends KalturaTextualAttachmentAssetFilter {

    

    constructor(data? : KalturaTranscriptAssetBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaTranscriptAssetBaseFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaTranscriptAssetBaseFilter',KalturaTranscriptAssetBaseFilter);
