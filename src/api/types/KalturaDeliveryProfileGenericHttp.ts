
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDeliveryProfileHttp, KalturaDeliveryProfileHttpArgs } from './KalturaDeliveryProfileHttp';

export interface KalturaDeliveryProfileGenericHttpArgs  extends KalturaDeliveryProfileHttpArgs {
    pattern? : string;
}


export class KalturaDeliveryProfileGenericHttp extends KalturaDeliveryProfileHttp {

    pattern : string;

    constructor(data? : KalturaDeliveryProfileGenericHttpArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDeliveryProfileGenericHttp' },
				pattern : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDeliveryProfileGenericHttp',KalturaDeliveryProfileGenericHttp);
