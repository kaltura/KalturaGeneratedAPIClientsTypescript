
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDrmProviderType } from './KalturaDrmProviderType';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaDrmDeviceBaseFilterArgs  extends KalturaFilterArgs {
    partnerIdEqual? : number;
	partnerIdIn? : string;
	deviceIdLike? : string;
	providerEqual? : KalturaDrmProviderType;
	providerIn? : string;
}


export class KalturaDrmDeviceBaseFilter extends KalturaFilter {

    partnerIdEqual : number;
	partnerIdIn : string;
	deviceIdLike : string;
	providerEqual : KalturaDrmProviderType;
	providerIn : string;

    constructor(data? : KalturaDrmDeviceBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c' , default : 'KalturaDrmDeviceBaseFilter'  },
				partnerIdEqual : { type : 'n'   },
				partnerIdIn : { type : 's'   },
				deviceIdLike : { type : 's'   },
				providerEqual : { type : 'es'   , subType : 'KalturaDrmProviderType'},
				providerIn : { type : 's'   }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDrmDeviceBaseFilter',KalturaDrmDeviceBaseFilter);
