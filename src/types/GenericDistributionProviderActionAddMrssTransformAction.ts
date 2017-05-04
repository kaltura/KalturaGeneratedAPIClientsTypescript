
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaGenericDistributionProviderAction } from './KalturaGenericDistributionProviderAction';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface GenericDistributionProviderActionAddMrssTransformActionArgs  extends KalturaRequestArgs {
    id : number;
	xslData : string;
}

/** 
* Add MRSS transform file to generic distribution provider action
**/
export class GenericDistributionProviderActionAddMrssTransformAction extends KalturaRequest<KalturaGenericDistributionProviderAction> {

    id : number;
	xslData : string;

    constructor(data : GenericDistributionProviderActionAddMrssTransformActionArgs)
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
				action : { type : 'c' , default : 'addMrssTransform' },
				id : { type : 'n'  },
				xslData : { type : 's'  }
            }
        );
        return result;
    }
}

