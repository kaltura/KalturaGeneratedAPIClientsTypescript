
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaAttachmentServeOptions } from './KalturaAttachmentServeOptions';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AttachmentAssetServeActionArgs  extends KalturaRequestArgs {
    attachmentAssetId : string;
	serveOptions? : KalturaAttachmentServeOptions;
}

/**
 * Build request payload for service 'attachmentAsset' action 'serve'.
 *
 * Usage: Serves attachment by its id
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class AttachmentAssetServeAction extends KalturaRequest<string> {

    attachmentAssetId : string;
	serveOptions : KalturaAttachmentServeOptions;

    constructor(data : AttachmentAssetServeActionArgs)
    {
        super(data, {responseType : 'f', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'attachment_attachmentasset' },
				action : { type : 'c', default : 'serve' },
				attachmentAssetId : { type : 's' },
				serveOptions : { type : 'o', subTypeConstructor : KalturaAttachmentServeOptions, subType : 'KalturaAttachmentServeOptions' }
            }
        );
        return result;
    }
}

