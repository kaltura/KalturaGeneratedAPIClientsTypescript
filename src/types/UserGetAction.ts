
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUser } from './KalturaUser';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface UserGetActionArgs  extends KalturaRequestArgs {
    userId? : string;
}

/** 
* Retrieves a user object for a specified user ID.
**/
export class UserGetAction extends KalturaRequest<KalturaUser> {

    userId : string;

    constructor(data? : UserGetActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaUser', responseConstructor : KalturaUser  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'user'  },
				action : { type : 'c' , default : 'get'  },
				userId : { type : 's'   }
            }
        );
        return result;
    }
}

