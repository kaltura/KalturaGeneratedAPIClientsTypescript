
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPartnerUsage } from './KalturaPartnerUsage';

import { KalturaReportInterval } from './KalturaReportInterval';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PartnerGetUsageActionArgs  extends KalturaRequestArgs {
    year? : number;
	month? : number;
	resolution? : KalturaReportInterval;
}

/** 
* Get usage statistics for a partner   Calculation is done according to partner's
* package   Additional data returned is a graph points of streaming usage in a
* timeframe   The resolution can be "days" or "months"
**/
export class PartnerGetUsageAction extends KalturaRequest<KalturaPartnerUsage> {

    year : number;
	month : number;
	resolution : KalturaReportInterval;

    constructor(data? : PartnerGetUsageActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaPartnerUsage', responseConstructor : KalturaPartnerUsage  });
        if (typeof this.month === 'undefined') this.month = 1;
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'partner'  },
				action : { type : 'c' , default : 'getUsage'  },
				year : { type : 'n'   },
				month : { type : 'n'   },
				resolution : { type : 'es'   , subType : 'KalturaReportInterval'}
            }
        );
        return result;
    }
}

