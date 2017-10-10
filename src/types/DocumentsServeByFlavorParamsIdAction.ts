
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DocumentsServeByFlavorParamsIdActionArgs  extends KalturaRequestArgs {
    entryId : string;
	flavorParamsId? : string;
	forceProxy? : boolean;
}

/**
 * Build request payload for service 'documents' action 'serveByFlavorParamsId'.
 *
 * Usage: Serves the file content
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class DocumentsServeByFlavorParamsIdAction extends KalturaRequest<string> {

    entryId : string;
	flavorParamsId : string;
	forceProxy : boolean;

    constructor(data : DocumentsServeByFlavorParamsIdActionArgs)
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
				action : { type : 'c', default : 'serveByFlavorParamsId' },
				entryId : { type : 's' },
				flavorParamsId : { type : 's' },
				forceProxy : { type : 'b' }
            }
        );
        return result;
    }
}

