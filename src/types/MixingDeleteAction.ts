
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface MixingDeleteActionArgs  extends KalturaRequestArgs {
    entryId : string;
}

/** 
* Delete a mix entry.
**/
export class MixingDeleteAction extends KalturaRequest<void> {

    entryId : string;

    constructor(data : MixingDeleteActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'mixing'  },
				action : { type : 'c' , default : 'delete'  },
				entryId : { type : 's'   }
            }
        );
        return result;
    }
}

