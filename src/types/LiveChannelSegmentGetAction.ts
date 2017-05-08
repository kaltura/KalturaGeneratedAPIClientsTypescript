
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveChannelSegment } from './KalturaLiveChannelSegment';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface LiveChannelSegmentGetActionArgs  extends KalturaRequestArgs {
    id : number;
}

/** 
* Get live channel segment by id
**/
export class LiveChannelSegmentGetAction extends KalturaRequest<KalturaLiveChannelSegment> {

    id : number;

    constructor(data : LiveChannelSegmentGetActionArgs)
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
				action : { type : 'c' , default : 'get'  },
				id : { type : 'n'   }
            }
        );
        return result;
    }
}

