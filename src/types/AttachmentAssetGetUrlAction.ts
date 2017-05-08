
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AttachmentAssetGetUrlActionArgs  extends KalturaRequestArgs {
    id : string;
	storageId? : number;
}

/** 
* Get download URL for the asset
**/
export class AttachmentAssetGetUrlAction extends KalturaRequest<string> {

    id : string;
	storageId : number;

    constructor(data : AttachmentAssetGetUrlActionArgs)
    {
        super(data, {responseType : 's', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'attachment_attachmentasset' },
				action : { type : 'c', default : 'getUrl' },
				id : { type : 's' },
				storageId : { type : 'n' }
            }
        );
        return result;
    }
}

