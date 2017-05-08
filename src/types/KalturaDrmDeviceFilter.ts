
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDrmDeviceBaseFilter, KalturaDrmDeviceBaseFilterArgs } from './KalturaDrmDeviceBaseFilter';

export interface KalturaDrmDeviceFilterArgs  extends KalturaDrmDeviceBaseFilterArgs {
    
}


export class KalturaDrmDeviceFilter extends KalturaDrmDeviceBaseFilter {

    

    constructor(data? : KalturaDrmDeviceFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c' , default : 'KalturaDrmDeviceFilter'  }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDrmDeviceFilter',KalturaDrmDeviceFilter);
