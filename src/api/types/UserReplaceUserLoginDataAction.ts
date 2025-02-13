
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUser } from './KalturaUser';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface UserReplaceUserLoginDataActionArgs  extends KalturaRequestArgs {
    userId : string;
	newLoginId : string;
	existingLoginId? : string;
}

/**
 * Build request payload for service 'user' action 'replaceUserLoginData'.
 *
 * Usage: Replace a user's existing login data to a new or an existing login data
 * to only be used when admin impersonates a partner
 *
 * Server response type:         KalturaUser
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class UserReplaceUserLoginDataAction extends KalturaRequest<KalturaUser> {

    userId : string;
	newLoginId : string;
	existingLoginId : string;

    constructor(data : UserReplaceUserLoginDataActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaUser', responseConstructor : KalturaUser  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'user' },
				action : { type : 'c', default : 'replaceUserLoginData' },
				userId : { type : 's' },
				newLoginId : { type : 's' },
				existingLoginId : { type : 's' }
            }
        );
        return result;
    }
}

