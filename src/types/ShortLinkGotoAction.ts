
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ShortLinkGotoActionArgs  extends KalturaRequestArgs {
    id : string;
	proxy? : boolean;
}

/**
 * Build request payload for service 'shortLink' action 'goto'.
 *
 * Usage: Serves short link
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ShortLinkGotoAction extends KalturaRequest<string> {

    id : string;
	proxy : boolean;

    constructor(data : ShortLinkGotoActionArgs)
    {
        super(data, {responseType : 'f', responseSubType : '', responseConstructor : null });
        if (typeof this.proxy === 'undefined') this.proxy = false;
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'shortlink_shortlink' },
				action : { type : 'c', default : 'goto' },
				id : { type : 's' },
				proxy : { type : 'b' }
            }
        );
        return result;
    }
}

