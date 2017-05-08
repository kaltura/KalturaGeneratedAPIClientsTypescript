
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDeliveryProfile } from './KalturaDeliveryProfile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DeliveryProfileGetActionArgs  extends KalturaRequestArgs {
    id : string;
}

/** 
* Get delivery by id
**/
export class DeliveryProfileGetAction extends KalturaRequest<KalturaDeliveryProfile> {

    id : string;

    constructor(data : DeliveryProfileGetActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaDeliveryProfile', responseConstructor : KalturaDeliveryProfile  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'deliveryprofile'  },
				action : { type : 'c' , default : 'get'  },
				id : { type : 's'   }
            }
        );
        return result;
    }
}

