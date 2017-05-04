
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AttachmentAssetServeActionArgs  extends KalturaRequestArgs {
    attachmentAssetId : string;
}

/** 
* Serves attachment by its id
**/
export class AttachmentAssetServeAction extends KalturaRequest<string> {

    attachmentAssetId : string;

    constructor(data : AttachmentAssetServeActionArgs)
    {
        super(data, 'f', '');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'attachment_attachmentasset' },
				action : { type : 'c' , default : 'serve' },
				attachmentAssetId : { type : 's'  }
            }
        );
        return result;
    }
}

