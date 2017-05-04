
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAppTokenListResponse } from './KalturaAppTokenListResponse';

import { KalturaAppTokenFilter } from './KalturaAppTokenFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AppTokenListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaAppTokenFilter;
	pager? : KalturaFilterPager;
}

/** 
* List application authentication tokens by filter and pager
**/
export class AppTokenListAction extends KalturaRequest<KalturaAppTokenListResponse> {

    filter : KalturaAppTokenFilter;
	pager : KalturaFilterPager;

    constructor(data? : AppTokenListActionArgs)
    {
        super(data, 'o', 'KalturaAppTokenListResponse');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'apptoken' },
				action : { type : 'c' , default : 'list' },
				filter : { type : 'o'  , subType : 'KalturaAppTokenFilter'},
				pager : { type : 'o'  , subType : 'KalturaFilterPager'}
            }
        );
        return result;
    }
}

