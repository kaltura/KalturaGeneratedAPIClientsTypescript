
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCuePoint } from './KalturaCuePoint';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CuePointUpdateActionArgs  extends KalturaRequestArgs {
    id : string;
	cuePoint : KalturaCuePoint;
}

/** 
* Update cue point by id
**/
export class CuePointUpdateAction extends KalturaRequest<KalturaCuePoint> {

    id : string;
	cuePoint : KalturaCuePoint;

    constructor(data : CuePointUpdateActionArgs)
    {
        super(data, 'o', 'KalturaCuePoint');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'cuepoint_cuepoint' },
				action : { type : 'c' , default : 'update' },
				id : { type : 's'  },
				cuePoint : { type : 'o'  , subType : 'KalturaCuePoint'}
            }
        );
        return result;
    }
}

