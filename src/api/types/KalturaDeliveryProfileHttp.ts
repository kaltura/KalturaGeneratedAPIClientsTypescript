
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDeliveryProfile, KalturaDeliveryProfileArgs } from './KalturaDeliveryProfile';

export interface KalturaDeliveryProfileHttpArgs  extends KalturaDeliveryProfileArgs {
    maxSize? : number;
}


export class KalturaDeliveryProfileHttp extends KalturaDeliveryProfile {

    maxSize : number;

    constructor(data? : KalturaDeliveryProfileHttpArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDeliveryProfileHttp' },
				maxSize : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDeliveryProfileHttp',KalturaDeliveryProfileHttp);
