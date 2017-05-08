
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPermission } from './KalturaPermission';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PermissionDeleteActionArgs  extends KalturaRequestArgs {
    permissionName : string;
}

/** 
* Deletes an existing permission object.
**/
export class PermissionDeleteAction extends KalturaRequest<KalturaPermission> {

    permissionName : string;

    constructor(data : PermissionDeleteActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaPermission', responseConstructor : KalturaPermission  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'permission'  },
				action : { type : 'c' , default : 'delete'  },
				permissionName : { type : 's'   }
            }
        );
        return result;
    }
}

