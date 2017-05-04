
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUserRole } from './KalturaUserRole';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface UserRoleDeleteActionArgs  extends KalturaRequestArgs {
    userRoleId : number;
}

/** 
* Deletes an existing user role object.
**/
export class UserRoleDeleteAction extends KalturaRequest<KalturaUserRole> {

    userRoleId : number;

    constructor(data : UserRoleDeleteActionArgs)
    {
        super(data, 'o', 'KalturaUserRole');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'userrole' },
				action : { type : 'c' , default : 'delete' },
				userRoleId : { type : 'n'  }
            }
        );
        return result;
    }
}

