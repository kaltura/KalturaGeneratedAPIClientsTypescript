
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEntryDistribution } from './KalturaEntryDistribution';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface EntryDistributionSubmitFetchReportActionArgs  extends KalturaRequestArgs {
    id : number;
}

/** 
* Submits Entry Distribution report request
**/
export class EntryDistributionSubmitFetchReportAction extends KalturaRequest<KalturaEntryDistribution> {

    id : number;

    constructor(data : EntryDistributionSubmitFetchReportActionArgs)
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
				action : { type : 'c' , default : 'submitFetchReport' },
				id : { type : 'n'  }
            }
        );
        return result;
    }
}

