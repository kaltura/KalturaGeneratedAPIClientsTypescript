
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaMarkdownAsset } from './KalturaMarkdownAsset';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaMarkdownAssetListResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaMarkdownAssetListResponse extends KalturaListResponse {

    readonly objects : KalturaMarkdownAsset[];

    constructor(data? : KalturaMarkdownAssetListResponseArgs)
    {
        super(data);
        if (typeof this.objects === 'undefined') this.objects = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaMarkdownAssetListResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaMarkdownAsset, subType : 'KalturaMarkdownAsset' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaMarkdownAssetListResponse',KalturaMarkdownAssetListResponse);
