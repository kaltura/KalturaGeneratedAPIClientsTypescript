
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface MediaGetVolumeMapActionArgs  extends KalturaRequestArgs {
    entryId : string;
}

/**
 * Build request payload for service 'media' action 'getVolumeMap'.
 *
 * Usage: Get volume map by entry id
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class MediaGetVolumeMapAction extends KalturaRequest<string> {

    entryId : string;

    constructor(data : MediaGetVolumeMapActionArgs)
    {
        super(data, {responseType : 'f', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'media' },
				action : { type : 'c', default : 'getVolumeMap' },
				entryId : { type : 's' }
            }
        );
        return result;
    }
}

