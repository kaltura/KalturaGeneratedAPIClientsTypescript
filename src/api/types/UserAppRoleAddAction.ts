
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUserAppRole } from './KalturaUserAppRole';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface UserAppRoleAddActionArgs  extends KalturaRequestArgs {
    userAppRole : KalturaUserAppRole;
}

/**
 * Build request payload for service 'userAppRole' action 'add'.
 *
 * Usage: Assign an application role for a user
 *
 * Server response type:         KalturaUserAppRole
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class UserAppRoleAddAction extends KalturaRequest<KalturaUserAppRole> {

    userAppRole : KalturaUserAppRole;

    constructor(data : UserAppRoleAddActionArgs)
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
				action : { type : 'c', default : 'add' },
				userAppRole : { type : 'o', subTypeConstructor : KalturaUserAppRole, subType : 'KalturaUserAppRole' }
            }
        );
        return result;
    }
}

