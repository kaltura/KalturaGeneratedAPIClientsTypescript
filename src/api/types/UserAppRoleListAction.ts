
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUserAppRoleListResponse } from './KalturaUserAppRoleListResponse';

import { KalturaUserAppRoleFilter } from './KalturaUserAppRoleFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface UserAppRoleListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaUserAppRoleFilter;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'userAppRole' action 'list'.
 *
 * Usage: List an application roles by filter and pager
 *
 * Server response type:         KalturaUserAppRoleListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class UserAppRoleListAction extends KalturaRequest<KalturaUserAppRoleListResponse> {

    filter : KalturaUserAppRoleFilter;
	pager : KalturaFilterPager;

    constructor(data? : UserAppRoleListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaUserAppRoleListResponse', responseConstructor : KalturaUserAppRoleListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'userapprole' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaUserAppRoleFilter, subType : 'KalturaUserAppRoleFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

