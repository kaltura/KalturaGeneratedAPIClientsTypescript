
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface MetadataProfileServeViewActionArgs  extends KalturaRequestArgs {
    id : number;
}

/**
 * Build request payload for service 'metadataProfile' action 'serveView'.
 *
 * Usage: Serves metadata profile view file
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class MetadataProfileServeViewAction extends KalturaRequest<string> {

    id : number;

    constructor(data : MetadataProfileServeViewActionArgs)
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
				action : { type : 'c', default : 'serveView' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

