
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaGenericDistributionProviderAction } from './KalturaGenericDistributionProviderAction';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface GenericDistributionProviderActionAddResultsTransformActionArgs  extends KalturaRequestArgs {
    id : number;
	transformData : string;
}

/** 
* Add results transform file to generic distribution provider action
**/
export class GenericDistributionProviderActionAddResultsTransformAction extends KalturaRequest<KalturaGenericDistributionProviderAction> {

    id : number;
	transformData : string;

    constructor(data : GenericDistributionProviderActionAddResultsTransformActionArgs)
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
				action : { type : 'c' , default : 'addResultsTransform'  },
				id : { type : 'n'   },
				transformData : { type : 's'   }
            }
        );
        return result;
    }
}

