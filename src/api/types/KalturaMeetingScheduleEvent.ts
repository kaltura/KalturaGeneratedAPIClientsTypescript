
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaEntryScheduleEvent, KalturaEntryScheduleEventArgs } from './KalturaEntryScheduleEvent';

export interface KalturaMeetingScheduleEventArgs  extends KalturaEntryScheduleEventArgs {
    preStartTime? : number;
}


export class KalturaMeetingScheduleEvent extends KalturaEntryScheduleEvent {

    preStartTime : number;

    constructor(data? : KalturaMeetingScheduleEventArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaMeetingScheduleEvent' },
				preStartTime : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaMeetingScheduleEvent',KalturaMeetingScheduleEvent);
