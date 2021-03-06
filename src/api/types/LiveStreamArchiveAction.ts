
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface LiveStreamArchiveActionArgs  extends KalturaRequestArgs {
    liveEntryId : string;
	vodEntryId : string;
}

/**
 * Build request payload for service 'liveStream' action 'archive'.
 *
 * Usage: Archive a live entry which was recorded
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class LiveStreamArchiveAction extends KalturaRequest<boolean> {

    liveEntryId : string;
	vodEntryId : string;

    constructor(data : LiveStreamArchiveActionArgs)
    {
        super(data, {responseType : 'b', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'livestream' },
				action : { type : 'c', default : 'archive' },
				liveEntryId : { type : 's' },
				vodEntryId : { type : 's' }
            }
        );
        return result;
    }
}

