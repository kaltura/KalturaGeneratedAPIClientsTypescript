
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBaseLiveScheduleEvent, KalturaBaseLiveScheduleEventArgs } from './KalturaBaseLiveScheduleEvent';

export interface KalturaLiveRedirectScheduleEventArgs  extends KalturaBaseLiveScheduleEventArgs {
    redirectEntryId? : string;
}


export class KalturaLiveRedirectScheduleEvent extends KalturaBaseLiveScheduleEvent {

    redirectEntryId : string;

    constructor(data? : KalturaLiveRedirectScheduleEventArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLiveRedirectScheduleEvent' },
				redirectEntryId : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaLiveRedirectScheduleEvent',KalturaLiveRedirectScheduleEvent);
