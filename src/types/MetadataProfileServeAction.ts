
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface MetadataProfileServeActionArgs  extends KalturaRequestArgs {
    id : number;
}

/**
 * Build request payload for service 'metadataProfile' action 'serve'.
 *
 * Usage: Serves metadata profile XSD file
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class MetadataProfileServeAction extends KalturaRequest<string> {

    id : number;

    constructor(data : MetadataProfileServeActionArgs)
    {
        super(data, {responseType : 'f', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'metadata_metadataprofile' },
				action : { type : 'c', default : 'serve' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

