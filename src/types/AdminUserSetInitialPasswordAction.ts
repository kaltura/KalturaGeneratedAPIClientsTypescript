
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AdminUserSetInitialPasswordActionArgs  extends KalturaRequestArgs {
    hashKey : string;
	newPassword : string;
}

/** 
* Set initial users password
**/
export class AdminUserSetInitialPasswordAction extends KalturaRequest<void> {

    hashKey : string;
	newPassword : string;

    constructor(data : AdminUserSetInitialPasswordActionArgs)
    {
        super(data, 'v', '');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'adminuser' },
				action : { type : 'c' , default : 'setInitialPassword' },
				hashKey : { type : 's'  },
				newPassword : { type : 's'  }
            }
        );
        return result;
    }
}

