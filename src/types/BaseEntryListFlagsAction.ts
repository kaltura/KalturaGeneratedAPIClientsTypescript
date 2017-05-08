
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaModerationFlagListResponse } from './KalturaModerationFlagListResponse';

import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface BaseEntryListFlagsActionArgs  extends KalturaRequestArgs {
    entryId : string;
	pager? : KalturaFilterPager;
}

/** 
* List all pending flags for the entry.
**/
export class BaseEntryListFlagsAction extends KalturaRequest<KalturaModerationFlagListResponse> {

    entryId : string;
	pager : KalturaFilterPager;

    constructor(data : BaseEntryListFlagsActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaModerationFlagListResponse', responseConstructor : KalturaModerationFlagListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'baseentry'  },
				action : { type : 'c' , default : 'listFlags'  },
				entryId : { type : 's'   },
				pager : { type : 'o'   , fallbackConstructor :  KalturaFilterPager, subType : 'KalturaFilterPager'}
            }
        );
        return result;
    }
}

