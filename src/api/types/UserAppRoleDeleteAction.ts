
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface UserAppRoleDeleteActionArgs  extends KalturaRequestArgs {
    userId : string;
	appGuid : string;
}

/**
 * Build request payload for service 'userAppRole' action 'delete'.
 *
 * Usage: Delete an application role for a user and app guid
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class UserAppRoleDeleteAction extends KalturaRequest<boolean> {

    userId : string;
	appGuid : string;

    constructor(data : UserAppRoleDeleteActionArgs)
    {
        super(data, {responseType : 'b', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'userapprole' },
				action : { type : 'c', default : 'delete' },
				userId : { type : 's' },
				appGuid : { type : 's' }
            }
        );
        return result;
    }
}

