
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUserListResponse } from './KalturaUserListResponse';

import { KalturaUserFilter } from './KalturaUserFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface UserListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaUserFilter;
	pager? : KalturaFilterPager;
}

/** 
* Lists user objects that are associated with an account.   Blocked users are
* listed unless you use a filter to exclude them.   Deleted users are not listed
* unless you use a filter to include them.
**/
export class UserListAction extends KalturaRequest<KalturaUserListResponse> {

    filter : KalturaUserFilter;
	pager : KalturaFilterPager;

    constructor(data? : UserListActionArgs)
    {
        super(data, 'o', 'KalturaUserListResponse');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'user' },
				action : { type : 'c' , default : 'list' },
				filter : { type : 'o'  , subType : 'KalturaUserFilter'},
				pager : { type : 'o'  , subType : 'KalturaFilterPager'}
            }
        );
        return result;
    }
}

