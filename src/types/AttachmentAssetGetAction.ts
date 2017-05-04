
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAttachmentAsset } from './KalturaAttachmentAsset';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AttachmentAssetGetActionArgs  extends KalturaRequestArgs {
    attachmentAssetId : string;
}


export class AttachmentAssetGetAction extends KalturaRequest<KalturaAttachmentAsset> {

    attachmentAssetId : string;

    constructor(data : AttachmentAssetGetActionArgs)
    {
        super(data, 'o', 'KalturaAttachmentAsset');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'attachment_attachmentasset' },
				action : { type : 'c' , default : 'get' },
				attachmentAssetId : { type : 's'  }
            }
        );
        return result;
    }
}

