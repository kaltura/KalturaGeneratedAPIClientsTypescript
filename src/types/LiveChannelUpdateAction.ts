
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveChannel } from './KalturaLiveChannel';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface LiveChannelUpdateActionArgs  extends KalturaRequestArgs {
    id : string;
	liveChannel : KalturaLiveChannel;
}

/** 
* Update live channel. Only the properties that were set will be updated.
**/
export class LiveChannelUpdateAction extends KalturaRequest<KalturaLiveChannel> {

    id : string;
	liveChannel : KalturaLiveChannel;

    constructor(data : LiveChannelUpdateActionArgs)
    {
        super(data, 'o', 'KalturaLiveChannel');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'livechannel' },
				action : { type : 'c' , default : 'update' },
				id : { type : 's'  },
				liveChannel : { type : 'o'  , subType : 'KalturaLiveChannel'}
            }
        );
        return result;
    }
}

