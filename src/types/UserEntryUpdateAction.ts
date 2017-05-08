
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaUserEntry } from './KalturaUserEntry';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface UserEntryUpdateActionArgs  extends KalturaRequestArgs {
    id : number;
	userEntry : KalturaUserEntry;
}


export class UserEntryUpdateAction extends KalturaRequest<void> {

    id : number;
	userEntry : KalturaUserEntry;

    constructor(data : UserEntryUpdateActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'userentry'  },
				action : { type : 'c' , default : 'update'  },
				id : { type : 'n'   },
				userEntry : { type : 'o'   , fallbackConstructor :  KalturaUserEntry, subType : 'KalturaUserEntry'}
            }
        );
        return result;
    }
}

