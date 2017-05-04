
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPermission } from './KalturaPermission';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PermissionAddActionArgs  extends KalturaRequestArgs {
    permission : KalturaPermission;
}

/** 
* Adds a new permission object to the account.
**/
export class PermissionAddAction extends KalturaRequest<KalturaPermission> {

    permission : KalturaPermission;

    constructor(data : PermissionAddActionArgs)
    {
        super(data, 'o', 'KalturaPermission');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'permission' },
				action : { type : 'c' , default : 'add' },
				permission : { type : 'o'  , subType : 'KalturaPermission'}
            }
        );
        return result;
    }
}

