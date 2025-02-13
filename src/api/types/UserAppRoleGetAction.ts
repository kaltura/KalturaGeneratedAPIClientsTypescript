
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUserAppRole } from './KalturaUserAppRole';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface UserAppRoleGetActionArgs  extends KalturaRequestArgs {
    userId : string;
	appGuid : string;
}

/**
 * Build request payload for service 'userAppRole' action 'get'.
 *
 * Usage: Get an application role for a user and app guid
 *
 * Server response type:         KalturaUserAppRole
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class UserAppRoleGetAction extends KalturaRequest<KalturaUserAppRole> {

    userId : string;
	appGuid : string;

    constructor(data : UserAppRoleGetActionArgs)
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
				action : { type : 'c', default : 'get' },
				userId : { type : 's' },
				appGuid : { type : 's' }
            }
        );
        return result;
    }
}

