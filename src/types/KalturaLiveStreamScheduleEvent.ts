
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaEntryScheduleEvent, KalturaEntryScheduleEventArgs } from './KalturaEntryScheduleEvent';

export interface KalturaLiveStreamScheduleEventArgs  extends KalturaEntryScheduleEventArgs {
    
}


export class KalturaLiveStreamScheduleEvent extends KalturaEntryScheduleEvent {

    

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
                objectType : { type : 'c', default : 'KalturaLiveStreamScheduleEvent' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaLiveStreamScheduleEvent',KalturaLiveStreamScheduleEvent);
