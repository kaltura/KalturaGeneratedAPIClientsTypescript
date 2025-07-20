
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaTextualAttachmentAsset } from './KalturaTextualAttachmentAsset';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaTextualAttachmentAssetListResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaTextualAttachmentAssetListResponse extends KalturaListResponse {

    readonly objects : KalturaTextualAttachmentAsset[];

    constructor(data? : KalturaTextualAttachmentAssetListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaTextualAttachmentAssetListResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaTextualAttachmentAsset, subType : 'KalturaTextualAttachmentAsset' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaTextualAttachmentAssetListResponse',KalturaTextualAttachmentAssetListResponse);
