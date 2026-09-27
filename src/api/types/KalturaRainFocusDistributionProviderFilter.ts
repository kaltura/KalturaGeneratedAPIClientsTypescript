
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaRainFocusDistributionProviderBaseFilter, KalturaRainFocusDistributionProviderBaseFilterArgs } from './KalturaRainFocusDistributionProviderBaseFilter';

export interface KalturaRainFocusDistributionProviderFilterArgs  extends KalturaRainFocusDistributionProviderBaseFilterArgs {
    
}


export class KalturaRainFocusDistributionProviderFilter extends KalturaRainFocusDistributionProviderBaseFilter {

    

    constructor(data? : KalturaRainFocusDistributionProviderFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaRainFocusDistributionProviderFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaRainFocusDistributionProviderFilter',KalturaRainFocusDistributionProviderFilter);
