
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaConferenceServerNodeBaseFilter, KalturaConferenceServerNodeBaseFilterArgs } from './KalturaConferenceServerNodeBaseFilter';

export interface KalturaConferenceServerNodeFilterArgs  extends KalturaConferenceServerNodeBaseFilterArgs {
    
}


export class KalturaConferenceServerNodeFilter extends KalturaConferenceServerNodeBaseFilter {

    

    constructor(data? : KalturaConferenceServerNodeFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaConferenceServerNodeFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaConferenceServerNodeFilter',KalturaConferenceServerNodeFilter);
