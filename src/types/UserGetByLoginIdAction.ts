
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUser } from './KalturaUser';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface UserGetByLoginIdActionArgs  extends KalturaRequestArgs {
    loginId : string;
}

/** 
* Retrieves a user object for a user's login ID and partner ID.   A login ID is
* the email address used by a user to log into the system.
**/
export class UserGetByLoginIdAction extends KalturaRequest<KalturaUser> {

    loginId : string;

    constructor(data : UserGetByLoginIdActionArgs)
    {
        super(data, 'o', 'KalturaUser');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'user' },
				action : { type : 'c' , default : 'getByLoginId' },
				loginId : { type : 's'  }
            }
        );
        return result;
    }
}

