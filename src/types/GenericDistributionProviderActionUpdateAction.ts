
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaGenericDistributionProviderAction } from './KalturaGenericDistributionProviderAction';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface GenericDistributionProviderActionUpdateActionArgs  extends KalturaRequestArgs {
    id : number;
	genericDistributionProviderAction : KalturaGenericDistributionProviderAction;
}

/** 
* Update Generic Distribution Provider Action by id
**/
export class GenericDistributionProviderActionUpdateAction extends KalturaRequest<KalturaGenericDistributionProviderAction> {

    id : number;
	genericDistributionProviderAction : KalturaGenericDistributionProviderAction;

    constructor(data : GenericDistributionProviderActionUpdateActionArgs)
    {
        super(data, 'o', 'KalturaGenericDistributionProviderAction');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'contentdistribution_genericdistributionprovideraction' },
				action : { type : 'c' , default : 'update' },
				id : { type : 'n'  },
				genericDistributionProviderAction : { type : 'o'  , subType : 'KalturaGenericDistributionProviderAction'}
            }
        );
        return result;
    }
}

