
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaMeetingScheduleEventBaseFilter, KalturaMeetingScheduleEventBaseFilterArgs } from './KalturaMeetingScheduleEventBaseFilter';

export interface KalturaMeetingScheduleEventFilterArgs  extends KalturaMeetingScheduleEventBaseFilterArgs {
    
}


export class KalturaMeetingScheduleEventFilter extends KalturaMeetingScheduleEventBaseFilter {

    

    constructor(data? : KalturaMeetingScheduleEventFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaMeetingScheduleEventFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaMeetingScheduleEventFilter',KalturaMeetingScheduleEventFilter);
