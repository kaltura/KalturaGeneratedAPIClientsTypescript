
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAttachmentAsset } from './KalturaAttachmentAsset';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AttachmentAssetUpdateActionArgs  extends KalturaRequestArgs {
    id : string;
	attachmentAsset : KalturaAttachmentAsset;
}

/** 
* Update attachment asset
**/
export class AttachmentAssetUpdateAction extends KalturaRequest<KalturaAttachmentAsset> {

    id : string;
	attachmentAsset : KalturaAttachmentAsset;

    constructor(data : AttachmentAssetUpdateActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaAttachmentAsset', responseConstructor : KalturaAttachmentAsset  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'attachment_attachmentasset' },
				action : { type : 'c', default : 'update' },
				id : { type : 's' },
				attachmentAsset : { type : 'o', subTypeConstructor : KalturaAttachmentAsset, subType : 'KalturaAttachmentAsset' }
            }
        );
        return result;
    }
}

