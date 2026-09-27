
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaRainFocusDistributionProfileBaseFilter, KalturaRainFocusDistributionProfileBaseFilterArgs } from './KalturaRainFocusDistributionProfileBaseFilter';

export interface KalturaRainFocusDistributionProfileFilterArgs  extends KalturaRainFocusDistributionProfileBaseFilterArgs {
    
}


export class KalturaRainFocusDistributionProfileFilter extends KalturaRainFocusDistributionProfileBaseFilter {

    

    constructor(data? : KalturaRainFocusDistributionProfileFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaRainFocusDistributionProfileFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaRainFocusDistributionProfileFilter',KalturaRainFocusDistributionProfileFilter);
