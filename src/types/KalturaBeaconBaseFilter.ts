
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaBeaconBaseFilterArgs  extends KalturaFilterArgs {
    updatedAtGreaterThanOrEqual? : Date;
	updatedAtLessThanOrEqual? : Date;
	relatedObjectTypeIn? : string;
	eventTypeIn? : string;
	objectIdIn? : string;
}


export class KalturaBeaconBaseFilter extends KalturaFilter {

    updatedAtGreaterThanOrEqual : Date;
	updatedAtLessThanOrEqual : Date;
	relatedObjectTypeIn : string;
	eventTypeIn : string;
	objectIdIn : string;

    constructor(data? : KalturaBeaconBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBeaconBaseFilter' },
				updatedAtGreaterThanOrEqual : { type : 'd' },
				updatedAtLessThanOrEqual : { type : 'd' },
				relatedObjectTypeIn : { type : 's' },
				eventTypeIn : { type : 's' },
				objectIdIn : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBeaconBaseFilter',KalturaBeaconBaseFilter);
