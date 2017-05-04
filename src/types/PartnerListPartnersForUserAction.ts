
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPartnerListResponse } from './KalturaPartnerListResponse';

import { KalturaPartnerFilter } from './KalturaPartnerFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PartnerListPartnersForUserActionArgs  extends KalturaRequestArgs {
    partnerFilter? : KalturaPartnerFilter;
	pager? : KalturaFilterPager;
}

/** 
* Retrieve a list of partner objects which the current user is allowed to access.
**/
export class PartnerListPartnersForUserAction extends KalturaRequest<KalturaPartnerListResponse> {

    partnerFilter : KalturaPartnerFilter;
	pager : KalturaFilterPager;

    constructor(data? : PartnerListPartnersForUserActionArgs)
    {
        super(data, 'o', 'KalturaPartnerListResponse');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'partner' },
				action : { type : 'c' , default : 'listPartnersForUser' },
				partnerFilter : { type : 'o'  , subType : 'KalturaPartnerFilter'},
				pager : { type : 'o'  , subType : 'KalturaFilterPager'}
            }
        );
        return result;
    }
}

