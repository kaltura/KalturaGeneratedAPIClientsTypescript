
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUserRole } from './KalturaUserRole';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface UserRoleGetActionArgs  extends KalturaRequestArgs {
    userRoleId : number;
}

/** 
* Retrieves a user role object using its ID.
**/
export class UserRoleGetAction extends KalturaRequest<KalturaUserRole> {

    userRoleId : number;

    constructor(data : UserRoleGetActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaUserRole', responseConstructor : KalturaUserRole  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'userrole' },
				action : { type : 'c', default : 'get' },
				userRoleId : { type : 'n' }
            }
        );
        return result;
    }
}

