
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DataServeActionArgs  extends KalturaRequestArgs {
    entryId : string;
	version? : number;
	forceProxy? : boolean;
}

/**
 * Build request payload for service 'data' action 'serve'.
 *
 * Usage: serve action returan the file from dataContent field
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class DataServeAction extends KalturaRequest<string> {

    entryId : string;
	version : number;
	forceProxy : boolean;

    constructor(data : DataServeActionArgs)
    {
        super(data, {responseType : 'f', responseSubType : '', responseConstructor : null });
        if (typeof this.version === 'undefined') this.version = -1;
		if (typeof this.forceProxy === 'undefined') this.forceProxy = false;
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'data' },
				action : { type : 'c', default : 'serve' },
				entryId : { type : 's' },
				version : { type : 'n' },
				forceProxy : { type : 'b' }
            }
        );
        return result;
    }
}

