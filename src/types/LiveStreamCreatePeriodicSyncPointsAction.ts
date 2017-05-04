
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface LiveStreamCreatePeriodicSyncPointsActionArgs  extends KalturaRequestArgs {
    entryId : string;
	interval : number;
	duration : number;
}

/** 
* Creates perioding metadata sync-point events on a live stream
**/
export class LiveStreamCreatePeriodicSyncPointsAction extends KalturaRequest<void> {

    entryId : string;
	interval : number;
	duration : number;

    constructor(data : LiveStreamCreatePeriodicSyncPointsActionArgs)
    {
        super(data, 'v', '');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'livestream' },
				action : { type : 'c' , default : 'createPeriodicSyncPoints' },
				entryId : { type : 's'  },
				interval : { type : 'n'  },
				duration : { type : 'n'  }
            }
        );
        return result;
    }
}

