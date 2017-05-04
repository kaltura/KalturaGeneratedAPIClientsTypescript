
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUser } from './KalturaUser';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface UserAddActionArgs  extends KalturaRequestArgs {
    user : KalturaUser;
}

/** 
* Adds a new user to an existing account in the Kaltura database.   Input param
* $id is the unique identifier in the partner's system.
**/
export class UserAddAction extends KalturaRequest<KalturaUser> {

    user : KalturaUser;

    constructor(data : UserAddActionArgs)
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
				action : { type : 'c' , default : 'add' },
				user : { type : 'o'  , subType : 'KalturaUser'}
            }
        );
        return result;
    }
}

