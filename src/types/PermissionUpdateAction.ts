
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPermission } from './KalturaPermission';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PermissionUpdateActionArgs  extends KalturaRequestArgs {
    permissionName : string;
	permission : KalturaPermission;
}

/** 
* Updates an existing permission object.
**/
export class PermissionUpdateAction extends KalturaRequest<KalturaPermission> {

    permissionName : string;
	permission : KalturaPermission;

    constructor(data : PermissionUpdateActionArgs)
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
				action : { type : 'c' , default : 'update' },
				permissionName : { type : 's'  },
				permission : { type : 'o'  , subType : 'KalturaPermission'}
            }
        );
        return result;
    }
}

