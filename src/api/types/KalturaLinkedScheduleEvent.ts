
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaLinkedScheduleEventArgs  extends KalturaObjectBaseArgs {
    offset? : number;
	eventId? : number;
}


export class KalturaLinkedScheduleEvent extends KalturaObjectBase {

    offset : number;
	eventId : number;

    constructor(data? : KalturaLinkedScheduleEventArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLinkedScheduleEvent' },
				offset : { type : 'n' },
				eventId : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaLinkedScheduleEvent',KalturaLinkedScheduleEvent);
