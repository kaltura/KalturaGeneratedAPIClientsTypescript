
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PermissionGetCurrentPermissionsActionArgs  extends KalturaRequestArgs {
    
}

/** 
* Retrieves a list of permissions that apply to the current KS.
**/
export class PermissionGetCurrentPermissionsAction extends KalturaRequest<string> {

    

    constructor(data? : PermissionGetCurrentPermissionsActionArgs)
    {
        super(data, {responseType : 's', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'permission' },
				action : { type : 'c', default : 'getCurrentPermissions' }
            }
        );
        return result;
    }
}

