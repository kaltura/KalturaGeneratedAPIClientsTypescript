
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface BaseEntryRejectActionArgs  extends KalturaRequestArgs {
    entryId : string;
}

/** 
* Reject the entry and mark the pending flags (if any) as moderated (this will
* make the entry non-playable).
**/
export class BaseEntryRejectAction extends KalturaRequest<void> {

    entryId : string;

    constructor(data : BaseEntryRejectActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'baseentry'  },
				action : { type : 'c' , default : 'reject'  },
				entryId : { type : 's'   }
            }
        );
        return result;
    }
}

