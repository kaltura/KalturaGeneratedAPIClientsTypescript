
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaEntryScheduleEventFilter, KalturaEntryScheduleEventFilterArgs } from './KalturaEntryScheduleEventFilter';

export interface KalturaLiveRedirectScheduleEventFilterArgs  extends KalturaEntryScheduleEventFilterArgs {
    
}


export class KalturaLiveRedirectScheduleEventFilter extends KalturaEntryScheduleEventFilter {

    

    constructor(data? : KalturaLiveRedirectScheduleEventFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLiveRedirectScheduleEventFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaLiveRedirectScheduleEventFilter',KalturaLiveRedirectScheduleEventFilter);
