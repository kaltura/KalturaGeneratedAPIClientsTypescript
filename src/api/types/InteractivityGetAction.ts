
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaInteractivity } from './KalturaInteractivity';

import { KalturaInteractivityDataFilter } from './KalturaInteractivityDataFilter';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface InteractivityGetActionArgs  extends KalturaRequestArgs {
    entryId : string;
	dataFilter? : KalturaInteractivityDataFilter;
}

/**
 * Build request payload for service 'interactivity' action 'get'.
 *
 * Usage: Retrieve a interactivity object by entry id
 *
 * Server response type:         KalturaInteractivity
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class InteractivityGetAction extends KalturaRequest<KalturaInteractivity> {

    entryId : string;
	dataFilter : KalturaInteractivityDataFilter;

    constructor(data : InteractivityGetActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaInteractivity', responseConstructor : KalturaInteractivity  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'interactivity_interactivity' },
				action : { type : 'c', default : 'get' },
				entryId : { type : 's' },
				dataFilter : { type : 'o', subTypeConstructor : KalturaInteractivityDataFilter, subType : 'KalturaInteractivityDataFilter' }
            }
        );
        return result;
    }
}

