
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAttachmentAssetFilter, KalturaAttachmentAssetFilterArgs } from './KalturaAttachmentAssetFilter';

export interface KalturaTextualAttachmentAssetBaseFilterArgs  extends KalturaAttachmentAssetFilterArgs {
    
}


export class KalturaTextualAttachmentAssetBaseFilter extends KalturaAttachmentAssetFilter {

    

    constructor(data? : KalturaTextualAttachmentAssetBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaTextualAttachmentAssetBaseFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaTextualAttachmentAssetBaseFilter',KalturaTextualAttachmentAssetBaseFilter);
