
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaResponseProfileListResponse } from './KalturaResponseProfileListResponse';

import { KalturaResponseProfileFilter } from './KalturaResponseProfileFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ResponseProfileListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaResponseProfileFilter;
	pager? : KalturaFilterPager;
}

/** 
* List response profiles by filter and pager
**/
export class ResponseProfileListAction extends KalturaRequest<KalturaResponseProfileListResponse> {

    filter : KalturaResponseProfileFilter;
	pager : KalturaFilterPager;

    constructor(data? : ResponseProfileListActionArgs)
    {
        super(data, 'o', 'KalturaResponseProfileListResponse');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'responseprofile' },
				action : { type : 'c' , default : 'list' },
				filter : { type : 'o'  , subType : 'KalturaResponseProfileFilter'},
				pager : { type : 'o'  , subType : 'KalturaFilterPager'}
            }
        );
        return result;
    }
}

