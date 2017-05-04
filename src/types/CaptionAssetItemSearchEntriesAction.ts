
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBaseEntryListResponse } from './KalturaBaseEntryListResponse';

import { KalturaBaseEntryFilter } from './KalturaBaseEntryFilter';
import { KalturaCaptionAssetItemFilter } from './KalturaCaptionAssetItemFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CaptionAssetItemSearchEntriesActionArgs  extends KalturaRequestArgs {
    entryFilter? : KalturaBaseEntryFilter;
	captionAssetItemFilter? : KalturaCaptionAssetItemFilter;
	captionAssetItemPager? : KalturaFilterPager;
}

/** 
* Search caption asset items by filter, pager and free text
**/
export class CaptionAssetItemSearchEntriesAction extends KalturaRequest<KalturaBaseEntryListResponse> {

    entryFilter : KalturaBaseEntryFilter;
	captionAssetItemFilter : KalturaCaptionAssetItemFilter;
	captionAssetItemPager : KalturaFilterPager;

    constructor(data? : CaptionAssetItemSearchEntriesActionArgs)
    {
        super(data, 'o', 'KalturaBaseEntryListResponse');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'captionsearch_captionassetitem' },
				action : { type : 'c' , default : 'searchEntries' },
				entryFilter : { type : 'o'  , subType : 'KalturaBaseEntryFilter'},
				captionAssetItemFilter : { type : 'o'  , subType : 'KalturaCaptionAssetItemFilter'},
				captionAssetItemPager : { type : 'o'  , subType : 'KalturaFilterPager'}
            }
        );
        return result;
    }
}

