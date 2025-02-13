
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUserAppRole } from './KalturaUserAppRole';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface UserAppRoleUpdateActionArgs  extends KalturaRequestArgs {
    userId : string;
	appGuid : string;
	userAppRole : KalturaUserAppRole;
}

/**
 * Build request payload for service 'userAppRole' action 'update'.
 *
 * Usage: Update an application role for a user
 *
 * Server response type:         KalturaUserAppRole
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class UserAppRoleUpdateAction extends KalturaRequest<KalturaUserAppRole> {

    userId : string;
	appGuid : string;
	userAppRole : KalturaUserAppRole;

    constructor(data : UserAppRoleUpdateActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaUserAppRole', responseConstructor : KalturaUserAppRole  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'userapprole' },
				action : { type : 'c', default : 'update' },
				userId : { type : 's' },
				appGuid : { type : 's' },
				userAppRole : { type : 'o', subTypeConstructor : KalturaUserAppRole, subType : 'KalturaUserAppRole' }
            }
        );
        return result;
    }
}

