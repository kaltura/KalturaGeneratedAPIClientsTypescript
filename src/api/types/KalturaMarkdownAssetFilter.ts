
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaMarkdownAssetBaseFilter, KalturaMarkdownAssetBaseFilterArgs } from './KalturaMarkdownAssetBaseFilter';

export interface KalturaMarkdownAssetFilterArgs  extends KalturaMarkdownAssetBaseFilterArgs {
    
}


export class KalturaMarkdownAssetFilter extends KalturaMarkdownAssetBaseFilter {

    

    constructor(data? : KalturaMarkdownAssetFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaMarkdownAssetFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaMarkdownAssetFilter',KalturaMarkdownAssetFilter);
