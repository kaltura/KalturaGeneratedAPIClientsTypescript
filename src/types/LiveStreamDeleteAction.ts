
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface LiveStreamDeleteActionArgs  extends KalturaRequestArgs {
    entryId : string;
}

/** 
* Delete a live stream entry.
**/
export class LiveStreamDeleteAction extends KalturaRequest<void> {

    entryId : string;

    constructor(data : LiveStreamDeleteActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'livestream'  },
				action : { type : 'c' , default : 'delete'  },
				entryId : { type : 's'   }
            }
        );
        return result;
    }
}

