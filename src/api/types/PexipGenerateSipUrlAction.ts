
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PexipGenerateSipUrlActionArgs  extends KalturaRequestArgs {
    entryId : string;
	regenerate? : boolean;
	sourceType? : number;
}

/**
 * Build request payload for service 'pexip' action 'generateSipUrl'.
 *
 * 
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class PexipGenerateSipUrlAction extends KalturaRequest<string> {

    entryId : string;
	regenerate : boolean;
	sourceType : number;

    constructor(data : PexipGenerateSipUrlActionArgs)
    {
        super(data, {responseType : 's', responseSubType : '', responseConstructor : null });
        if (typeof this.regenerate === 'undefined') this.regenerate = false;
		if (typeof this.sourceType === 'undefined') this.sourceType = 1;
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'sip_pexip' },
				action : { type : 'c', default : 'generateSipUrl' },
				entryId : { type : 's' },
				regenerate : { type : 'b' },
				sourceType : { type : 'n' }
            }
        );
        return result;
    }
}

