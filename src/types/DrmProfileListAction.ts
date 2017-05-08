
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDrmProfileListResponse } from './KalturaDrmProfileListResponse';

import { KalturaDrmProfileFilter } from './KalturaDrmProfileFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DrmProfileListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaDrmProfileFilter;
	pager? : KalturaFilterPager;
}

/** 
* List KalturaDrmProfile objects
**/
export class DrmProfileListAction extends KalturaRequest<KalturaDrmProfileListResponse> {

    filter : KalturaDrmProfileFilter;
	pager : KalturaFilterPager;

    constructor(data? : DrmProfileListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaDrmProfileListResponse', responseConstructor : KalturaDrmProfileListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'drm_drmprofile'  },
				action : { type : 'c' , default : 'list'  },
				filter : { type : 'o'   , fallbackConstructor :  KalturaDrmProfileFilter, subType : 'KalturaDrmProfileFilter'},
				pager : { type : 'o'   , fallbackConstructor :  KalturaFilterPager, subType : 'KalturaFilterPager'}
            }
        );
        return result;
    }
}

