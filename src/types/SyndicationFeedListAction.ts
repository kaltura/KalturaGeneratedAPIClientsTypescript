
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBaseSyndicationFeedListResponse } from './KalturaBaseSyndicationFeedListResponse';

import { KalturaBaseSyndicationFeedFilter } from './KalturaBaseSyndicationFeedFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SyndicationFeedListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaBaseSyndicationFeedFilter;
	pager? : KalturaFilterPager;
}

/** 
* List Syndication Feeds by filter with paging support
**/
export class SyndicationFeedListAction extends KalturaRequest<KalturaBaseSyndicationFeedListResponse> {

    filter : KalturaBaseSyndicationFeedFilter;
	pager : KalturaFilterPager;

    constructor(data? : SyndicationFeedListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaBaseSyndicationFeedListResponse', responseConstructor : KalturaBaseSyndicationFeedListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'syndicationfeed'  },
				action : { type : 'c' , default : 'list'  },
				filter : { type : 'o'   , fallbackConstructor :  KalturaBaseSyndicationFeedFilter, subType : 'KalturaBaseSyndicationFeedFilter'},
				pager : { type : 'o'   , fallbackConstructor :  KalturaFilterPager, subType : 'KalturaFilterPager'}
            }
        );
        return result;
    }
}

