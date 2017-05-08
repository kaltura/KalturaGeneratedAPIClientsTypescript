
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface BaseEntryApproveActionArgs  extends KalturaRequestArgs {
    entryId : string;
}

/** 
* Approve the entry and mark the pending flags (if any) as moderated (this will
* make the entry playable).
**/
export class BaseEntryApproveAction extends KalturaRequest<void> {

    entryId : string;

    constructor(data : BaseEntryApproveActionArgs)
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
				action : { type : 'c' , default : 'approve'  },
				entryId : { type : 's'   }
            }
        );
        return result;
    }
}

