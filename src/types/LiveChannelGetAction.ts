
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveChannel } from './KalturaLiveChannel';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface LiveChannelGetActionArgs  extends KalturaRequestArgs {
    id : string;
}

/** 
* Get live channel by ID.
**/
export class LiveChannelGetAction extends KalturaRequest<KalturaLiveChannel> {

    id : string;

    constructor(data : LiveChannelGetActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaLiveChannel', responseConstructor : KalturaLiveChannel  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'livechannel'  },
				action : { type : 'c' , default : 'get'  },
				id : { type : 's'   }
            }
        );
        return result;
    }
}

