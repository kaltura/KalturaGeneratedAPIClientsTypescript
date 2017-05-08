
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDeliveryProfile } from './KalturaDeliveryProfile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DeliveryProfileUpdateActionArgs  extends KalturaRequestArgs {
    id : string;
	delivery : KalturaDeliveryProfile;
}

/** 
* Update exisiting delivery
**/
export class DeliveryProfileUpdateAction extends KalturaRequest<KalturaDeliveryProfile> {

    id : string;
	delivery : KalturaDeliveryProfile;

    constructor(data : DeliveryProfileUpdateActionArgs)
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
				action : { type : 'c' , default : 'update'  },
				id : { type : 's'   },
				delivery : { type : 'o'   , fallbackConstructor :  KalturaDeliveryProfile, subType : 'KalturaDeliveryProfile'}
            }
        );
        return result;
    }
}

