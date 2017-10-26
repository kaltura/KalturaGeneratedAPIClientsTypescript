
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface TimeWarnerGetFeedActionArgs  extends KalturaRequestArgs {
    distributionProfileId : number;
	hash : string;
}

/**
 * Build request payload for service 'timeWarner' action 'getFeed'.
 *
 * 
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class TimeWarnerGetFeedAction extends KalturaRequest<string> {

    distributionProfileId : number;
	hash : string;

    constructor(data : TimeWarnerGetFeedActionArgs)
    {
        super(data, {responseType : 'f', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'timewarnerdistribution_timewarner' },
				action : { type : 'c', default : 'getFeed' },
				distributionProfileId : { type : 'n' },
				hash : { type : 's' }
            }
        );
        return result;
    }
}

