
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaEntryScheduleEventFilter, KalturaEntryScheduleEventFilterArgs } from './KalturaEntryScheduleEventFilter';

export interface KalturaVodScheduleEventBaseFilterArgs  extends KalturaEntryScheduleEventFilterArgs {
    
}


export class KalturaVodScheduleEventBaseFilter extends KalturaEntryScheduleEventFilter {

    

    constructor(data? : KalturaVodScheduleEventBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaVodScheduleEventBaseFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaVodScheduleEventBaseFilter',KalturaVodScheduleEventBaseFilter);
