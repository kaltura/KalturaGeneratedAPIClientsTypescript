
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaEntryScheduleEvent, KalturaEntryScheduleEventArgs } from './KalturaEntryScheduleEvent';

export interface KalturaLiveStreamScheduleEventArgs  extends KalturaEntryScheduleEventArgs {
    projectedAudience? : number;
	sourceEntryId? : string;
	preStartTime? : number;
}


export class KalturaLiveStreamScheduleEvent extends KalturaEntryScheduleEvent {

    projectedAudience : number;
	sourceEntryId : string;
	preStartTime : number;

    constructor(data? : KalturaLiveStreamScheduleEventArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLiveStreamScheduleEvent' },
				projectedAudience : { type : 'n' },
				sourceEntryId : { type : 's' },
				preStartTime : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaLiveStreamScheduleEvent',KalturaLiveStreamScheduleEvent);
