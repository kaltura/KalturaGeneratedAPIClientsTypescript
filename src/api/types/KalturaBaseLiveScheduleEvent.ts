
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaEntryScheduleEvent, KalturaEntryScheduleEventArgs } from './KalturaEntryScheduleEvent';

export interface KalturaBaseLiveScheduleEventArgs  extends KalturaEntryScheduleEventArgs {
    
}


export class KalturaBaseLiveScheduleEvent extends KalturaEntryScheduleEvent {

    

    constructor(data? : KalturaBaseLiveScheduleEventArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBaseLiveScheduleEvent' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBaseLiveScheduleEvent',KalturaBaseLiveScheduleEvent);
