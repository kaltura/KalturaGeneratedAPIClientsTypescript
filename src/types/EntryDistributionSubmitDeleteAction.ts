
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEntryDistribution } from './KalturaEntryDistribution';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface EntryDistributionSubmitDeleteActionArgs  extends KalturaRequestArgs {
    id : number;
}

/** 
* Deletes Entry Distribution from the remote destination
**/
export class EntryDistributionSubmitDeleteAction extends KalturaRequest<KalturaEntryDistribution> {

    id : number;

    constructor(data : EntryDistributionSubmitDeleteActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaEntryDistribution', responseConstructor : KalturaEntryDistribution  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'contentdistribution_entrydistribution'  },
				action : { type : 'c' , default : 'submitDelete'  },
				id : { type : 'n'   }
            }
        );
        return result;
    }
}

