
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBaseEntryListResponse } from './KalturaBaseEntryListResponse';

import { KalturaBaseEntryFilter } from './KalturaBaseEntryFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface BaseEntryListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaBaseEntryFilter;
	pager? : KalturaFilterPager;
}

/** 
* List base entries by filter with paging support.
**/
export class BaseEntryListAction extends KalturaRequest<KalturaBaseEntryListResponse> {

    filter : KalturaBaseEntryFilter;
	pager : KalturaFilterPager;

    constructor(data? : BaseEntryListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaBaseEntryListResponse', responseConstructor : KalturaBaseEntryListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'baseentry'  },
				action : { type : 'c' , default : 'list'  },
				filter : { type : 'o'   , fallbackConstructor :  KalturaBaseEntryFilter, subType : 'KalturaBaseEntryFilter'},
				pager : { type : 'o'   , fallbackConstructor :  KalturaFilterPager, subType : 'KalturaFilterPager'}
            }
        );
        return result;
    }
}

