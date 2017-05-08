
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface LiveChannelDeleteActionArgs  extends KalturaRequestArgs {
    id : string;
}

/** 
* Delete a live channel.
**/
export class LiveChannelDeleteAction extends KalturaRequest<void> {

    id : string;

    constructor(data : LiveChannelDeleteActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'livechannel'  },
				action : { type : 'c' , default : 'delete'  },
				id : { type : 's'   }
            }
        );
        return result;
    }
}

