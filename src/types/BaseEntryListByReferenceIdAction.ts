
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBaseEntryListResponse } from './KalturaBaseEntryListResponse';

import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface BaseEntryListByReferenceIdActionArgs  extends KalturaRequestArgs {
    refId : string;
	pager? : KalturaFilterPager;
}

/** 
* List base entries by filter according to reference id
**/
export class BaseEntryListByReferenceIdAction extends KalturaRequest<KalturaBaseEntryListResponse> {

    refId : string;
	pager : KalturaFilterPager;

    constructor(data : BaseEntryListByReferenceIdActionArgs)
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
				action : { type : 'c' , default : 'listByReferenceId'  },
				refId : { type : 's'   },
				pager : { type : 'o'   , fallbackConstructor :  KalturaFilterPager, subType : 'KalturaFilterPager'}
            }
        );
        return result;
    }
}

