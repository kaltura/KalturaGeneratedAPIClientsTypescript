
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface UserNotifyBanActionArgs  extends KalturaRequestArgs {
    userId : string;
}

/** 
* Notifies that a user is banned from an account.
**/
export class UserNotifyBanAction extends KalturaRequest<void> {

    userId : string;

    constructor(data : UserNotifyBanActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'user' },
				action : { type : 'c', default : 'notifyBan' },
				userId : { type : 's' }
            }
        );
        return result;
    }
}

