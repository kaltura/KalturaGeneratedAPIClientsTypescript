
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaCuePointStatus } from './KalturaCuePointStatus';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CuePointUpdateStatusActionArgs  extends KalturaRequestArgs {
    id : string;
	status : KalturaCuePointStatus;
}

/** 
* Update cuePoint status by id
**/
export class CuePointUpdateStatusAction extends KalturaRequest<void> {

    id : string;
	status : KalturaCuePointStatus;

    constructor(data : CuePointUpdateStatusActionArgs)
    {
        super(data, 'v', '');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'cuepoint_cuepoint' },
				action : { type : 'c' , default : 'updateStatus' },
				id : { type : 's'  },
				status : { type : 'en'  , subType : 'KalturaCuePointStatus'}
            }
        );
        return result;
    }
}

