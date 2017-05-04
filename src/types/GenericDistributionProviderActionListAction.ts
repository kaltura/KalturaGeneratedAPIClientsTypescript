
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaGenericDistributionProviderActionListResponse } from './KalturaGenericDistributionProviderActionListResponse';

import { KalturaGenericDistributionProviderActionFilter } from './KalturaGenericDistributionProviderActionFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface GenericDistributionProviderActionListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaGenericDistributionProviderActionFilter;
	pager? : KalturaFilterPager;
}

/** 
* List all distribution providers
**/
export class GenericDistributionProviderActionListAction extends KalturaRequest<KalturaGenericDistributionProviderActionListResponse> {

    filter : KalturaGenericDistributionProviderActionFilter;
	pager : KalturaFilterPager;

    constructor(data? : GenericDistributionProviderActionListActionArgs)
    {
        super(data, 'o', 'KalturaGenericDistributionProviderActionListResponse');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'contentdistribution_genericdistributionprovideraction' },
				action : { type : 'c' , default : 'list' },
				filter : { type : 'o'  , subType : 'KalturaGenericDistributionProviderActionFilter'},
				pager : { type : 'o'  , subType : 'KalturaFilterPager'}
            }
        );
        return result;
    }
}

