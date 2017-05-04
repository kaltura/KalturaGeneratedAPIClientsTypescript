
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaGroupUser } from './KalturaGroupUser';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface GroupUserAddActionArgs  extends KalturaRequestArgs {
    groupUser : KalturaGroupUser;
}

/** 
* Add new GroupUser
**/
export class GroupUserAddAction extends KalturaRequest<KalturaGroupUser> {

    groupUser : KalturaGroupUser;

    constructor(data : GroupUserAddActionArgs)
    {
        super(data, 'o', 'KalturaGroupUser');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'groupuser' },
				action : { type : 'c' , default : 'add' },
				groupUser : { type : 'o'  , subType : 'KalturaGroupUser'}
            }
        );
        return result;
    }
}

