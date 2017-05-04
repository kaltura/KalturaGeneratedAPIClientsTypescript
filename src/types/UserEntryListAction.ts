
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUserEntryListResponse } from './KalturaUserEntryListResponse';

import { KalturaUserEntryFilter } from './KalturaUserEntryFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface UserEntryListActionArgs  extends KalturaRequestArgs {
    filter : KalturaUserEntryFilter;
	pager? : KalturaFilterPager;
}


export class UserEntryListAction extends KalturaRequest<KalturaUserEntryListResponse> {

    filter : KalturaUserEntryFilter;
	pager : KalturaFilterPager;

    constructor(data : UserEntryListActionArgs)
    {
        super(data, 'o', 'KalturaUserEntryListResponse');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'userentry' },
				action : { type : 'c' , default : 'list' },
				filter : { type : 'o'  , subType : 'KalturaUserEntryFilter'},
				pager : { type : 'o'  , subType : 'KalturaFilterPager'}
            }
        );
        return result;
    }
}

