
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEntryDistribution } from './KalturaEntryDistribution';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface EntryDistributionSubmitAddActionArgs  extends KalturaRequestArgs {
    id : number;
	submitWhenReady? : boolean;
}

/** 
* Submits Entry Distribution to the remote destination
**/
export class EntryDistributionSubmitAddAction extends KalturaRequest<KalturaEntryDistribution> {

    id : number;
	submitWhenReady : boolean;

    constructor(data : EntryDistributionSubmitAddActionArgs)
    {
        super(data, 'o', 'KalturaEntryDistribution');
        if (typeof this.submitWhenReady === 'undefined') this.submitWhenReady = false;
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'contentdistribution_entrydistribution' },
				action : { type : 'c' , default : 'submitAdd' },
				id : { type : 'n'  },
				submitWhenReady : { type : 'b'  }
            }
        );
        return result;
    }
}

