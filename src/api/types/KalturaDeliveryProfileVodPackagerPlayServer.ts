
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDeliveryProfileVod, KalturaDeliveryProfileVodArgs } from './KalturaDeliveryProfileVod';

export interface KalturaDeliveryProfileVodPackagerPlayServerArgs  extends KalturaDeliveryProfileVodArgs {
    adStitchingEnabled? : boolean;
}


export class KalturaDeliveryProfileVodPackagerPlayServer extends KalturaDeliveryProfileVod {

    adStitchingEnabled : boolean;

    constructor(data? : KalturaDeliveryProfileVodPackagerPlayServerArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDeliveryProfileVodPackagerPlayServer' },
				adStitchingEnabled : { type : 'b' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDeliveryProfileVodPackagerPlayServer',KalturaDeliveryProfileVodPackagerPlayServer);
