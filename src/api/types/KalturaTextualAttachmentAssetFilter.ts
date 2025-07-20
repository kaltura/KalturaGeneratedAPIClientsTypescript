
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaTextualAttachmentAssetBaseFilter, KalturaTextualAttachmentAssetBaseFilterArgs } from './KalturaTextualAttachmentAssetBaseFilter';

export interface KalturaTextualAttachmentAssetFilterArgs  extends KalturaTextualAttachmentAssetBaseFilterArgs {
    
}


export class KalturaTextualAttachmentAssetFilter extends KalturaTextualAttachmentAssetBaseFilter {

    

    constructor(data? : KalturaTextualAttachmentAssetFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaTextualAttachmentAssetFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaTextualAttachmentAssetFilter',KalturaTextualAttachmentAssetFilter);
