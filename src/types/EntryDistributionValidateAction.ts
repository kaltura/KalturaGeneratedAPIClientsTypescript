
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEntryDistribution } from './KalturaEntryDistribution';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface EntryDistributionValidateActionArgs  extends KalturaRequestArgs {
    id : number;
}

/** 
* Validates Entry Distribution by id for submission
**/
export class EntryDistributionValidateAction extends KalturaRequest<KalturaEntryDistribution> {

    id : number;

    constructor(data : EntryDistributionValidateActionArgs)
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
				action : { type : 'c' , default : 'validate'  },
				id : { type : 'n'   }
            }
        );
        return result;
    }
}

