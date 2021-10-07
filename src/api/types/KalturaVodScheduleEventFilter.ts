
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaVodScheduleEventBaseFilter, KalturaVodScheduleEventBaseFilterArgs } from './KalturaVodScheduleEventBaseFilter';

export interface KalturaVodScheduleEventFilterArgs  extends KalturaVodScheduleEventBaseFilterArgs {
    
}


export class KalturaVodScheduleEventFilter extends KalturaVodScheduleEventBaseFilter {

    

    constructor(data? : KalturaVodScheduleEventFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaVodScheduleEventFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaVodScheduleEventFilter',KalturaVodScheduleEventFilter);
