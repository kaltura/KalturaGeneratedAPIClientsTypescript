
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaGenericDistributionProviderListResponse } from './KalturaGenericDistributionProviderListResponse';

import { KalturaGenericDistributionProviderFilter } from './KalturaGenericDistributionProviderFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface GenericDistributionProviderListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaGenericDistributionProviderFilter;
	pager? : KalturaFilterPager;
}

/** 
* List all distribution providers
**/
export class GenericDistributionProviderListAction extends KalturaRequest<KalturaGenericDistributionProviderListResponse> {

    filter : KalturaGenericDistributionProviderFilter;
	pager : KalturaFilterPager;

    constructor(data? : GenericDistributionProviderListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaGenericDistributionProviderListResponse', responseConstructor : KalturaGenericDistributionProviderListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'contentdistribution_genericdistributionprovider' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaGenericDistributionProviderFilter, subType : 'KalturaGenericDistributionProviderFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

