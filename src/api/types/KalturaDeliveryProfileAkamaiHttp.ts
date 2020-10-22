
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDeliveryProfileHttp, KalturaDeliveryProfileHttpArgs } from './KalturaDeliveryProfileHttp';

export interface KalturaDeliveryProfileAkamaiHttpArgs  extends KalturaDeliveryProfileHttpArgs {
    useIntelliseek? : boolean;
}


export class KalturaDeliveryProfileAkamaiHttp extends KalturaDeliveryProfileHttp {

    useIntelliseek : boolean;

    constructor(data? : KalturaDeliveryProfileAkamaiHttpArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDeliveryProfileAkamaiHttp' },
				useIntelliseek : { type : 'b' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDeliveryProfileAkamaiHttp',KalturaDeliveryProfileAkamaiHttp);
