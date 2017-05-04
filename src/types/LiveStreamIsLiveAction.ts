
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaPlaybackProtocol } from './KalturaPlaybackProtocol';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface LiveStreamIsLiveActionArgs  extends KalturaRequestArgs {
    id : string;
	protocol : KalturaPlaybackProtocol;
}

/** 
* Delivering the status of a live stream (on-air/offline) if it is possible
**/
export class LiveStreamIsLiveAction extends KalturaRequest<boolean> {

    id : string;
	protocol : KalturaPlaybackProtocol;

    constructor(data : LiveStreamIsLiveActionArgs)
    {
        super(data, 'b', '');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'livestream' },
				action : { type : 'c' , default : 'isLive' },
				id : { type : 's'  },
				protocol : { type : 'es'  , subType : 'KalturaPlaybackProtocol'}
            }
        );
        return result;
    }
}

