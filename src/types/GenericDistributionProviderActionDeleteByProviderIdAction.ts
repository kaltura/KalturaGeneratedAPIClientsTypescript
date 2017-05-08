
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaDistributionAction } from './KalturaDistributionAction';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface GenericDistributionProviderActionDeleteByProviderIdActionArgs  extends KalturaRequestArgs {
    genericDistributionProviderId : number;
	actionType : KalturaDistributionAction;
}

/** 
* Delete Generic Distribution Provider Action by provider id
**/
export class GenericDistributionProviderActionDeleteByProviderIdAction extends KalturaRequest<void> {

    genericDistributionProviderId : number;
	actionType : KalturaDistributionAction;

    constructor(data : GenericDistributionProviderActionDeleteByProviderIdActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'contentdistribution_genericdistributionprovideraction'  },
				action : { type : 'c' , default : 'deleteByProviderId'  },
				genericDistributionProviderId : { type : 'n'   },
				actionType : { type : 'en'   , subType : 'KalturaDistributionAction'}
            }
        );
        return result;
    }
}

