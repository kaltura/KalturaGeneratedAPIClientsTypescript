
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface UserSetInitialPasswordActionArgs  extends KalturaRequestArgs {
    hashKey : string;
	newPassword : string;
}

/** 
* Set initial users password
**/
export class UserSetInitialPasswordAction extends KalturaRequest<void> {

    hashKey : string;
	newPassword : string;

    constructor(data : UserSetInitialPasswordActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'user'  },
				action : { type : 'c' , default : 'setInitialPassword'  },
				hashKey : { type : 's'   },
				newPassword : { type : 's'   }
            }
        );
        return result;
    }
}

