
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaGenericDistributionProviderAction } from './KalturaGenericDistributionProviderAction';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface GenericDistributionProviderActionAddActionArgs  extends KalturaRequestArgs {
    genericDistributionProviderAction : KalturaGenericDistributionProviderAction;
}

/** 
* Add new Generic Distribution Provider Action
**/
export class GenericDistributionProviderActionAddAction extends KalturaRequest<KalturaGenericDistributionProviderAction> {

    genericDistributionProviderAction : KalturaGenericDistributionProviderAction;

    constructor(data : GenericDistributionProviderActionAddActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaGenericDistributionProviderAction', responseConstructor : KalturaGenericDistributionProviderAction  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'contentdistribution_genericdistributionprovideraction'  },
				action : { type : 'c' , default : 'add'  },
				genericDistributionProviderAction : { type : 'o'   , fallbackConstructor :  KalturaGenericDistributionProviderAction, subType : 'KalturaGenericDistributionProviderAction'}
            }
        );
        return result;
    }
}

