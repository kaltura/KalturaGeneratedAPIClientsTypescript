
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMediaInfoListResponse } from './KalturaMediaInfoListResponse';

import { KalturaMediaInfoFilter } from './KalturaMediaInfoFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface MediaInfoListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaMediaInfoFilter;
	pager? : KalturaFilterPager;
}

/** 
* List media info objects by filter and pager
**/
export class MediaInfoListAction extends KalturaRequest<KalturaMediaInfoListResponse> {

    filter : KalturaMediaInfoFilter;
	pager : KalturaFilterPager;

    constructor(data? : MediaInfoListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaMediaInfoListResponse', responseConstructor : KalturaMediaInfoListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'mediainfo'  },
				action : { type : 'c' , default : 'list'  },
				filter : { type : 'o'   , fallbackConstructor :  KalturaMediaInfoFilter, subType : 'KalturaMediaInfoFilter'},
				pager : { type : 'o'   , fallbackConstructor :  KalturaFilterPager, subType : 'KalturaFilterPager'}
            }
        );
        return result;
    }
}

