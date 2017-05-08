
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCaptionAssetListResponse } from './KalturaCaptionAssetListResponse';

import { KalturaAssetFilter } from './KalturaAssetFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CaptionAssetListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaAssetFilter;
	pager? : KalturaFilterPager;
}

/** 
* List caption Assets by filter and pager
**/
export class CaptionAssetListAction extends KalturaRequest<KalturaCaptionAssetListResponse> {

    filter : KalturaAssetFilter;
	pager : KalturaFilterPager;

    constructor(data? : CaptionAssetListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaCaptionAssetListResponse', responseConstructor : KalturaCaptionAssetListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'caption_captionasset'  },
				action : { type : 'c' , default : 'list'  },
				filter : { type : 'o'   , fallbackConstructor :  KalturaAssetFilter, subType : 'KalturaAssetFilter'},
				pager : { type : 'o'   , fallbackConstructor :  KalturaFilterPager, subType : 'KalturaFilterPager'}
            }
        );
        return result;
    }
}

