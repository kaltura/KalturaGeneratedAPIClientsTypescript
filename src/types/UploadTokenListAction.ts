
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUploadTokenListResponse } from './KalturaUploadTokenListResponse';

import { KalturaUploadTokenFilter } from './KalturaUploadTokenFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface UploadTokenListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaUploadTokenFilter;
	pager? : KalturaFilterPager;
}

/** 
* List upload token by filter with pager support.    When using a user session the
* service will be restricted to users objects only.
**/
export class UploadTokenListAction extends KalturaRequest<KalturaUploadTokenListResponse> {

    filter : KalturaUploadTokenFilter;
	pager : KalturaFilterPager;

    constructor(data? : UploadTokenListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaUploadTokenListResponse', responseConstructor : KalturaUploadTokenListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'uploadtoken'  },
				action : { type : 'c' , default : 'list'  },
				filter : { type : 'o'   , fallbackConstructor :  KalturaUploadTokenFilter, subType : 'KalturaUploadTokenFilter'},
				pager : { type : 'o'   , fallbackConstructor :  KalturaFilterPager, subType : 'KalturaFilterPager'}
            }
        );
        return result;
    }
}

