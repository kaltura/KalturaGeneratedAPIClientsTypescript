
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface BaseEntryDeleteActionArgs  extends KalturaRequestArgs {
    entryId : string;
}

/** 
* Delete an entry.
**/
export class BaseEntryDeleteAction extends KalturaRequest<void> {

    entryId : string;

    constructor(data : BaseEntryDeleteActionArgs)
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
				action : { type : 'c' , default : 'delete'  },
				entryId : { type : 's'   }
            }
        );
        return result;
    }
}

