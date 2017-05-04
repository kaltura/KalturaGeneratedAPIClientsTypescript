
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPartnerUsageListResponse } from './KalturaPartnerUsageListResponse';

import { KalturaPartnerFilter } from './KalturaPartnerFilter';
import { KalturaReportInputFilter } from './KalturaReportInputFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface VarConsoleGetPartnerUsageActionArgs  extends KalturaRequestArgs {
    partnerFilter? : KalturaPartnerFilter;
	usageFilter? : KalturaReportInputFilter;
	pager? : KalturaFilterPager;
}

/** 
* Function which calulates partner usage of a group of a VAR's sub-publishers
**/
export class VarConsoleGetPartnerUsageAction extends KalturaRequest<KalturaPartnerUsageListResponse> {

    partnerFilter : KalturaPartnerFilter;
	usageFilter : KalturaReportInputFilter;
	pager : KalturaFilterPager;

    constructor(data? : VarConsoleGetPartnerUsageActionArgs)
    {
        super(data, 'o', 'KalturaPartnerUsageListResponse');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'varconsole_varconsole' },
				action : { type : 'c' , default : 'getPartnerUsage' },
				partnerFilter : { type : 'o'  , subType : 'KalturaPartnerFilter'},
				usageFilter : { type : 'o'  , subType : 'KalturaReportInputFilter'},
				pager : { type : 'o'  , subType : 'KalturaFilterPager'}
            }
        );
        return result;
    }
}

