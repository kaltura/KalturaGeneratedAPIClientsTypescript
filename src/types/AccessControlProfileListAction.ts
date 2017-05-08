
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAccessControlProfileListResponse } from './KalturaAccessControlProfileListResponse';

import { KalturaAccessControlProfileFilter } from './KalturaAccessControlProfileFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AccessControlProfileListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaAccessControlProfileFilter;
	pager? : KalturaFilterPager;
}

/** 
* List access control profiles by filter and pager
**/
export class AccessControlProfileListAction extends KalturaRequest<KalturaAccessControlProfileListResponse> {

    filter : KalturaAccessControlProfileFilter;
	pager : KalturaFilterPager;

    constructor(data? : AccessControlProfileListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaAccessControlProfileListResponse', responseConstructor : KalturaAccessControlProfileListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'accesscontrolprofile'  },
				action : { type : 'c' , default : 'list'  },
				filter : { type : 'o'   , fallbackConstructor :  KalturaAccessControlProfileFilter, subType : 'KalturaAccessControlProfileFilter'},
				pager : { type : 'o'   , fallbackConstructor :  KalturaFilterPager, subType : 'KalturaFilterPager'}
            }
        );
        return result;
    }
}

