
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveChannelSegment } from './KalturaLiveChannelSegment';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface LiveChannelSegmentAddActionArgs  extends KalturaRequestArgs {
    liveChannelSegment : KalturaLiveChannelSegment;
}

/** 
* Add new live channel segment
**/
export class LiveChannelSegmentAddAction extends KalturaRequest<KalturaLiveChannelSegment> {

    liveChannelSegment : KalturaLiveChannelSegment;

    constructor(data : LiveChannelSegmentAddActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaLiveChannelSegment', responseConstructor : KalturaLiveChannelSegment  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'livechannelsegment'  },
				action : { type : 'c' , default : 'add'  },
				liveChannelSegment : { type : 'o'   , fallbackConstructor :  KalturaLiveChannelSegment, subType : 'KalturaLiveChannelSegment'}
            }
        );
        return result;
    }
}

