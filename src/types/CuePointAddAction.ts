
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCuePoint } from './KalturaCuePoint';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CuePointAddActionArgs  extends KalturaRequestArgs {
    cuePoint : KalturaCuePoint;
}

/** 
* Allows you to add an cue point object associated with an entry
**/
export class CuePointAddAction extends KalturaRequest<KalturaCuePoint> {

    cuePoint : KalturaCuePoint;

    constructor(data : CuePointAddActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaCuePoint', responseConstructor : KalturaCuePoint  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'cuepoint_cuepoint' },
				action : { type : 'c', default : 'add' },
				cuePoint : { type : 'o', subTypeConstructor : KalturaCuePoint, subType : 'KalturaCuePoint' }
            }
        );
        return result;
    }
}

