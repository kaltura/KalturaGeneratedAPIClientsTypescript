
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCuePointListResponse } from './KalturaCuePointListResponse';

import { KalturaCuePointFilter } from './KalturaCuePointFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CuePointListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaCuePointFilter;
	pager? : KalturaFilterPager;
}

/** 
* List cue point objects by filter and pager
**/
export class CuePointListAction extends KalturaRequest<KalturaCuePointListResponse> {

    filter : KalturaCuePointFilter;
	pager : KalturaFilterPager;

    constructor(data? : CuePointListActionArgs)
    {
        super(data, 'o', 'KalturaCuePointListResponse');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'cuepoint_cuepoint' },
				action : { type : 'c' , default : 'list' },
				filter : { type : 'o'  , subType : 'KalturaCuePointFilter'},
				pager : { type : 'o'  , subType : 'KalturaFilterPager'}
            }
        );
        return result;
    }
}

