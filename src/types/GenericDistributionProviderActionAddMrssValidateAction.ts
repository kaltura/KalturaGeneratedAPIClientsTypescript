
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaGenericDistributionProviderAction } from './KalturaGenericDistributionProviderAction';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface GenericDistributionProviderActionAddMrssValidateActionArgs  extends KalturaRequestArgs {
    id : number;
	xsdData : string;
}

/** 
* Add MRSS validate file to generic distribution provider action
**/
export class GenericDistributionProviderActionAddMrssValidateAction extends KalturaRequest<KalturaGenericDistributionProviderAction> {

    id : number;
	xsdData : string;

    constructor(data : GenericDistributionProviderActionAddMrssValidateActionArgs)
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
				action : { type : 'c' , default : 'addMrssValidate'  },
				id : { type : 'n'   },
				xsdData : { type : 's'   }
            }
        );
        return result;
    }
}

