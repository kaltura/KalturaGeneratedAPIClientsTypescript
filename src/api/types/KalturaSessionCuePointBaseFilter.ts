
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCuePointFilter, KalturaCuePointFilterArgs } from './KalturaCuePointFilter';

export interface KalturaSessionCuePointBaseFilterArgs  extends KalturaCuePointFilterArgs {
    endTimeGreaterThanOrEqual? : number;
	endTimeLessThanOrEqual? : number;
	durationGreaterThanOrEqual? : number;
	durationLessThanOrEqual? : number;
}


export class KalturaSessionCuePointBaseFilter extends KalturaCuePointFilter {

    endTimeGreaterThanOrEqual : number;
	endTimeLessThanOrEqual : number;
	durationGreaterThanOrEqual : number;
	durationLessThanOrEqual : number;

    constructor(data? : KalturaSessionCuePointBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSessionCuePointBaseFilter' },
				endTimeGreaterThanOrEqual : { type : 'n' },
				endTimeLessThanOrEqual : { type : 'n' },
				durationGreaterThanOrEqual : { type : 'n' },
				durationLessThanOrEqual : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSessionCuePointBaseFilter',KalturaSessionCuePointBaseFilter);
