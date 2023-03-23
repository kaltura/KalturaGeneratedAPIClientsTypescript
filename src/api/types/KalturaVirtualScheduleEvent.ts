
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaVirtualScheduleEventSubType } from './KalturaVirtualScheduleEventSubType';
import { KalturaScheduleEvent, KalturaScheduleEventArgs } from './KalturaScheduleEvent';

export interface KalturaVirtualScheduleEventArgs  extends KalturaScheduleEventArgs {
    virtualEventId? : number;
	virtualScheduleEventSubType? : KalturaVirtualScheduleEventSubType;
}


export class KalturaVirtualScheduleEvent extends KalturaScheduleEvent {

    virtualEventId : number;
	virtualScheduleEventSubType : KalturaVirtualScheduleEventSubType;

    constructor(data? : KalturaVirtualScheduleEventArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaVirtualScheduleEvent' },
				virtualEventId : { type : 'n' },
				virtualScheduleEventSubType : { type : 'en', subTypeConstructor : KalturaVirtualScheduleEventSubType, subType : 'KalturaVirtualScheduleEventSubType' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaVirtualScheduleEvent',KalturaVirtualScheduleEvent);
