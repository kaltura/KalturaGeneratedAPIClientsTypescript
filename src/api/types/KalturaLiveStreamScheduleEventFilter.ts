
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaLiveStreamScheduleEventBaseFilter, KalturaLiveStreamScheduleEventBaseFilterArgs } from './KalturaLiveStreamScheduleEventBaseFilter';

export interface KalturaLiveStreamScheduleEventFilterArgs  extends KalturaLiveStreamScheduleEventBaseFilterArgs {
    sourceEntryIdEqual? : string;
}


export class KalturaLiveStreamScheduleEventFilter extends KalturaLiveStreamScheduleEventBaseFilter {

    sourceEntryIdEqual : string;

    constructor(data? : KalturaLiveStreamScheduleEventFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLiveStreamScheduleEventFilter' },
				sourceEntryIdEqual : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaLiveStreamScheduleEventFilter',KalturaLiveStreamScheduleEventFilter);
