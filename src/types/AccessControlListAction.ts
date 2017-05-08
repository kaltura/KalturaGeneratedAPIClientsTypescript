
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAccessControlListResponse } from './KalturaAccessControlListResponse';

import { KalturaAccessControlFilter } from './KalturaAccessControlFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AccessControlListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaAccessControlFilter;
	pager? : KalturaFilterPager;
}

/** 
* List Access Control Profiles by filter and pager
**/
export class AccessControlListAction extends KalturaRequest<KalturaAccessControlListResponse> {

    filter : KalturaAccessControlFilter;
	pager : KalturaFilterPager;

    constructor(data? : AccessControlListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaAccessControlListResponse', responseConstructor : KalturaAccessControlListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'accesscontrol' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaAccessControlFilter, subType : 'KalturaAccessControlFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

