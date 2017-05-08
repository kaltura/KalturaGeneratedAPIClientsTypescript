
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaGenericDistributionProvider } from './KalturaGenericDistributionProvider';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface GenericDistributionProviderAddActionArgs  extends KalturaRequestArgs {
    genericDistributionProvider : KalturaGenericDistributionProvider;
}

/** 
* Add new Generic Distribution Provider
**/
export class GenericDistributionProviderAddAction extends KalturaRequest<KalturaGenericDistributionProvider> {

    genericDistributionProvider : KalturaGenericDistributionProvider;

    constructor(data : GenericDistributionProviderAddActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaGenericDistributionProvider', responseConstructor : KalturaGenericDistributionProvider  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'contentdistribution_genericdistributionprovider'  },
				action : { type : 'c' , default : 'add'  },
				genericDistributionProvider : { type : 'o'   , fallbackConstructor :  KalturaGenericDistributionProvider, subType : 'KalturaGenericDistributionProvider'}
            }
        );
        return result;
    }
}

