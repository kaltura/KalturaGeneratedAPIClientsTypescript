
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEntryServerNodeListResponse } from './KalturaEntryServerNodeListResponse';

import { KalturaEntryServerNodeFilter } from './KalturaEntryServerNodeFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface EntryServerNodeListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaEntryServerNodeFilter;
	pager? : KalturaFilterPager;
}


export class EntryServerNodeListAction extends KalturaRequest<KalturaEntryServerNodeListResponse> {

    filter : KalturaEntryServerNodeFilter;
	pager : KalturaFilterPager;

    constructor(data? : EntryServerNodeListActionArgs)
    {
        super(data, 'o', 'KalturaEntryServerNodeListResponse');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'entryservernode' },
				action : { type : 'c' , default : 'list' },
				filter : { type : 'o'  , subType : 'KalturaEntryServerNodeFilter'},
				pager : { type : 'o'  , subType : 'KalturaFilterPager'}
            }
        );
        return result;
    }
}

