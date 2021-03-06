
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaServerNodeFilter, KalturaServerNodeFilterArgs } from './KalturaServerNodeFilter';

export interface KalturaConferenceServerNodeBaseFilterArgs  extends KalturaServerNodeFilterArgs {
    
}


export class KalturaConferenceServerNodeBaseFilter extends KalturaServerNodeFilter {

    

    constructor(data? : KalturaConferenceServerNodeBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaConferenceServerNodeBaseFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaConferenceServerNodeBaseFilter',KalturaConferenceServerNodeBaseFilter);
