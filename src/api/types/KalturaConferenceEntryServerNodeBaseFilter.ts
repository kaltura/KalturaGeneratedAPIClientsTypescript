
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaEntryServerNodeFilter, KalturaEntryServerNodeFilterArgs } from './KalturaEntryServerNodeFilter';

export interface KalturaConferenceEntryServerNodeBaseFilterArgs  extends KalturaEntryServerNodeFilterArgs {
    
}


export class KalturaConferenceEntryServerNodeBaseFilter extends KalturaEntryServerNodeFilter {

    

    constructor(data? : KalturaConferenceEntryServerNodeBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaConferenceEntryServerNodeBaseFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaConferenceEntryServerNodeBaseFilter',KalturaConferenceEntryServerNodeBaseFilter);
