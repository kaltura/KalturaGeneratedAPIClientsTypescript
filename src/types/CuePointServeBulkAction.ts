
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaCuePointFilter } from './KalturaCuePointFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CuePointServeBulkActionArgs  extends KalturaRequestArgs {
    filter? : KalturaCuePointFilter;
	pager? : KalturaFilterPager;
}

/** 
* Download multiple cue points objects as XML definitions
**/
export class CuePointServeBulkAction extends KalturaRequest<string> {

    filter : KalturaCuePointFilter;
	pager : KalturaFilterPager;

    constructor(data? : CuePointServeBulkActionArgs)
    {
        super(data, 'f', '');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'cuepoint_cuepoint' },
				action : { type : 'c' , default : 'serveBulk' },
				filter : { type : 'o'  , subType : 'KalturaCuePointFilter'},
				pager : { type : 'o'  , subType : 'KalturaFilterPager'}
            }
        );
        return result;
    }
}

