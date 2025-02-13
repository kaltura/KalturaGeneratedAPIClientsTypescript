
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveStreamStats } from './KalturaLiveStreamStats';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface LiveStreamGetLiveStreamStatsActionArgs  extends KalturaRequestArgs {
    entryId : string;
}

/**
 * Build request payload for service 'liveStream' action 'getLiveStreamStats'.
 *
 * Usage: Deliver information about the livestream
 *
 * Server response type:         KalturaLiveStreamStats
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class LiveStreamGetLiveStreamStatsAction extends KalturaRequest<KalturaLiveStreamStats> {

    entryId : string;

    constructor(data : LiveStreamGetLiveStreamStatsActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaLiveStreamStats', responseConstructor : KalturaLiveStreamStats  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'livestream' },
				action : { type : 'c', default : 'getLiveStreamStats' },
				entryId : { type : 's' }
            }
        );
        return result;
    }
}

