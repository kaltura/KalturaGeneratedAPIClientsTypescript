
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionProviderListResponse } from './KalturaDistributionProviderListResponse';

import { KalturaDistributionProviderFilter } from './KalturaDistributionProviderFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DistributionProviderListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaDistributionProviderFilter;
	pager? : KalturaFilterPager;
}

/** 
* List all distribution providers
**/
export class DistributionProviderListAction extends KalturaRequest<KalturaDistributionProviderListResponse> {

    filter : KalturaDistributionProviderFilter;
	pager : KalturaFilterPager;

    constructor(data? : DistributionProviderListActionArgs)
    {
        super(data, 'o', 'KalturaDistributionProviderListResponse');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'contentdistribution_distributionprovider' },
				action : { type : 'c' , default : 'list' },
				filter : { type : 'o'  , subType : 'KalturaDistributionProviderFilter'},
				pager : { type : 'o'  , subType : 'KalturaFilterPager'}
            }
        );
        return result;
    }
}

