
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCortexApiDistributionProfileBaseFilter, KalturaCortexApiDistributionProfileBaseFilterArgs } from './KalturaCortexApiDistributionProfileBaseFilter';

export interface KalturaCortexApiDistributionProfileFilterArgs  extends KalturaCortexApiDistributionProfileBaseFilterArgs {
    
}


export class KalturaCortexApiDistributionProfileFilter extends KalturaCortexApiDistributionProfileBaseFilter {

    

    constructor(data? : KalturaCortexApiDistributionProfileFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCortexApiDistributionProfileFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCortexApiDistributionProfileFilter',KalturaCortexApiDistributionProfileFilter);
