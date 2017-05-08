
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUserRole } from './KalturaUserRole';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface UserRoleCloneActionArgs  extends KalturaRequestArgs {
    userRoleId : number;
}

/** 
* Creates a new user role object that is a duplicate of an existing role.
**/
export class UserRoleCloneAction extends KalturaRequest<KalturaUserRole> {

    userRoleId : number;

    constructor(data : UserRoleCloneActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaUserRole', responseConstructor : KalturaUserRole  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'userrole'  },
				action : { type : 'c' , default : 'clone'  },
				userRoleId : { type : 'n'   }
            }
        );
        return result;
    }
}

