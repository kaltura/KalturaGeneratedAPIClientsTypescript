
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUserEntry } from './KalturaUserEntry';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface UserEntryAddActionArgs  extends KalturaRequestArgs {
    userEntry : KalturaUserEntry;
}

/** 
* Adds a user_entry to the Kaltura DB.
**/
export class UserEntryAddAction extends KalturaRequest<KalturaUserEntry> {

    userEntry : KalturaUserEntry;

    constructor(data : UserEntryAddActionArgs)
    {
        super(data, 'o', 'KalturaUserEntry');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'userentry' },
				action : { type : 'c' , default : 'add' },
				userEntry : { type : 'o'  , subType : 'KalturaUserEntry'}
            }
        );
        return result;
    }
}

