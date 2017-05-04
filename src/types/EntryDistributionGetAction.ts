
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEntryDistribution } from './KalturaEntryDistribution';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface EntryDistributionGetActionArgs  extends KalturaRequestArgs {
    id : number;
}

/** 
* Get Entry Distribution by id
**/
export class EntryDistributionGetAction extends KalturaRequest<KalturaEntryDistribution> {

    id : number;

    constructor(data : EntryDistributionGetActionArgs)
    {
        super(data, 'o', 'KalturaEntryDistribution');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'contentdistribution_entrydistribution' },
				action : { type : 'c' , default : 'get' },
				id : { type : 'n'  }
            }
        );
        return result;
    }
}

