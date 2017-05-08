
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AttachmentAssetDeleteActionArgs  extends KalturaRequestArgs {
    attachmentAssetId : string;
}


export class AttachmentAssetDeleteAction extends KalturaRequest<void> {

    attachmentAssetId : string;

    constructor(data : AttachmentAssetDeleteActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'attachment_attachmentasset'  },
				action : { type : 'c' , default : 'delete'  },
				attachmentAssetId : { type : 's'   }
            }
        );
        return result;
    }
}

