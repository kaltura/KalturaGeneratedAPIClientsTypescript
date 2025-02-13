
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaSessionCuePointBaseFilter, KalturaSessionCuePointBaseFilterArgs } from './KalturaSessionCuePointBaseFilter';

export interface KalturaSessionCuePointFilterArgs  extends KalturaSessionCuePointBaseFilterArgs {
    
}


export class KalturaSessionCuePointFilter extends KalturaSessionCuePointBaseFilter {

    

    constructor(data? : KalturaSessionCuePointFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSessionCuePointFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSessionCuePointFilter',KalturaSessionCuePointFilter);
