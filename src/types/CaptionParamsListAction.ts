
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCaptionParamsListResponse } from './KalturaCaptionParamsListResponse';

import { KalturaCaptionParamsFilter } from './KalturaCaptionParamsFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CaptionParamsListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaCaptionParamsFilter;
	pager? : KalturaFilterPager;
}

/** 
* List Caption Params by filter with paging support (By default - all system
* default params will be listed too)
**/
export class CaptionParamsListAction extends KalturaRequest<KalturaCaptionParamsListResponse> {

    filter : KalturaCaptionParamsFilter;
	pager : KalturaFilterPager;

    constructor(data? : CaptionParamsListActionArgs)
    {
        super(data, 'o', 'KalturaCaptionParamsListResponse');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'caption_captionparams' },
				action : { type : 'c' , default : 'list' },
				filter : { type : 'o'  , subType : 'KalturaCaptionParamsFilter'},
				pager : { type : 'o'  , subType : 'KalturaFilterPager'}
            }
        );
        return result;
    }
}

