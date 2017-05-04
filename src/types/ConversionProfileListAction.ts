
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaConversionProfileListResponse } from './KalturaConversionProfileListResponse';

import { KalturaConversionProfileFilter } from './KalturaConversionProfileFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ConversionProfileListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaConversionProfileFilter;
	pager? : KalturaFilterPager;
}

/** 
* List Conversion Profiles by filter with paging support
**/
export class ConversionProfileListAction extends KalturaRequest<KalturaConversionProfileListResponse> {

    filter : KalturaConversionProfileFilter;
	pager : KalturaFilterPager;

    constructor(data? : ConversionProfileListActionArgs)
    {
        super(data, 'o', 'KalturaConversionProfileListResponse');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'conversionprofile' },
				action : { type : 'c' , default : 'list' },
				filter : { type : 'o'  , subType : 'KalturaConversionProfileFilter'},
				pager : { type : 'o'  , subType : 'KalturaFilterPager'}
            }
        );
        return result;
    }
}

