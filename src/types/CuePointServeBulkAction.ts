
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaCuePointFilter } from './KalturaCuePointFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CuePointServeBulkActionArgs  extends KalturaRequestArgs {
    filter? : KalturaCuePointFilter;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'cuePoint' action 'serveBulk'.
 *
 * Usage: Download multiple cue points objects as XML definitions
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class CuePointServeBulkAction extends KalturaRequest<string> {

    filter : KalturaCuePointFilter;
	pager : KalturaFilterPager;

    constructor(data? : CuePointServeBulkActionArgs)
    {
        super(data, {responseType : 'f', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'cuepoint_cuepoint' },
				action : { type : 'c', default : 'serveBulk' },
				filter : { type : 'o', subTypeConstructor : KalturaCuePointFilter, subType : 'KalturaCuePointFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

