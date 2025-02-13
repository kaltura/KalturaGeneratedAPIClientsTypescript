
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCortexApiDistributionProviderBaseFilter, KalturaCortexApiDistributionProviderBaseFilterArgs } from './KalturaCortexApiDistributionProviderBaseFilter';

export interface KalturaCortexApiDistributionProviderFilterArgs  extends KalturaCortexApiDistributionProviderBaseFilterArgs {
    
}


export class KalturaCortexApiDistributionProviderFilter extends KalturaCortexApiDistributionProviderBaseFilter {

    

    constructor(data? : KalturaCortexApiDistributionProviderFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCortexApiDistributionProviderFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCortexApiDistributionProviderFilter',KalturaCortexApiDistributionProviderFilter);
