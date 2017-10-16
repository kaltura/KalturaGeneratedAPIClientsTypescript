
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DocumentsServeActionArgs  extends KalturaRequestArgs {
    entryId : string;
	flavorAssetId? : string;
	forceProxy? : boolean;
}

/**
 * Build request payload for service 'documents' action 'serve'.
 *
 * Usage: Serves the file content
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class DocumentsServeAction extends KalturaRequest<string> {

    entryId : string;
	flavorAssetId : string;
	forceProxy : boolean;

    constructor(data : DocumentsServeActionArgs)
    {
        super(data, {responseType : 'f', responseSubType : '', responseConstructor : null });
        if (typeof this.forceProxy === 'undefined') this.forceProxy = false;
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'document_documents' },
				action : { type : 'c', default : 'serve' },
				entryId : { type : 's' },
				flavorAssetId : { type : 's' },
				forceProxy : { type : 'b' }
            }
        );
        return result;
    }
}

