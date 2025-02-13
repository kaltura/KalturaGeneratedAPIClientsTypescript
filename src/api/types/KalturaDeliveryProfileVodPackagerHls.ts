
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDeliveryProfileVodPackagerPlayServer, KalturaDeliveryProfileVodPackagerPlayServerArgs } from './KalturaDeliveryProfileVodPackagerPlayServer';

export interface KalturaDeliveryProfileVodPackagerHlsArgs  extends KalturaDeliveryProfileVodPackagerPlayServerArgs {
    allowFairplayOffline? : boolean;
	supportFmp4? : boolean;
}


export class KalturaDeliveryProfileVodPackagerHls extends KalturaDeliveryProfileVodPackagerPlayServer {

    allowFairplayOffline : boolean;
	supportFmp4 : boolean;

    constructor(data? : KalturaDeliveryProfileVodPackagerHlsArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDeliveryProfileVodPackagerHls' },
				allowFairplayOffline : { type : 'b' },
				supportFmp4 : { type : 'b' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDeliveryProfileVodPackagerHls',KalturaDeliveryProfileVodPackagerHls);
