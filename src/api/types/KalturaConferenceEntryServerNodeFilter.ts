
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaConferenceEntryServerNodeBaseFilter, KalturaConferenceEntryServerNodeBaseFilterArgs } from './KalturaConferenceEntryServerNodeBaseFilter';

export interface KalturaConferenceEntryServerNodeFilterArgs  extends KalturaConferenceEntryServerNodeBaseFilterArgs {
    
}


export class KalturaConferenceEntryServerNodeFilter extends KalturaConferenceEntryServerNodeBaseFilter {

    

    constructor(data? : KalturaConferenceEntryServerNodeFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaConferenceEntryServerNodeFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaConferenceEntryServerNodeFilter',KalturaConferenceEntryServerNodeFilter);
