
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaVirtualScheduleEventBaseFilter, KalturaVirtualScheduleEventBaseFilterArgs } from './KalturaVirtualScheduleEventBaseFilter';

export interface KalturaVirtualScheduleEventFilterArgs  extends KalturaVirtualScheduleEventBaseFilterArgs {
    
}


export class KalturaVirtualScheduleEventFilter extends KalturaVirtualScheduleEventBaseFilter {

    

    constructor(data? : KalturaVirtualScheduleEventFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaVirtualScheduleEventFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaVirtualScheduleEventFilter',KalturaVirtualScheduleEventFilter);
