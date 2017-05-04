
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaStorageProfileListResponse } from './KalturaStorageProfileListResponse';

import { KalturaStorageProfileFilter } from './KalturaStorageProfileFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface StorageProfileListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaStorageProfileFilter;
	pager? : KalturaFilterPager;
}


export class StorageProfileListAction extends KalturaRequest<KalturaStorageProfileListResponse> {

    filter : KalturaStorageProfileFilter;
	pager : KalturaFilterPager;

    constructor(data? : StorageProfileListActionArgs)
    {
        super(data, 'o', 'KalturaStorageProfileListResponse');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'storageprofile' },
				action : { type : 'c' , default : 'list' },
				filter : { type : 'o'  , subType : 'KalturaStorageProfileFilter'},
				pager : { type : 'o'  , subType : 'KalturaFilterPager'}
            }
        );
        return result;
    }
}

