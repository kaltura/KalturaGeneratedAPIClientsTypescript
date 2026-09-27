
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaConfigurableDistributionJobProviderData, KalturaConfigurableDistributionJobProviderDataArgs } from './KalturaConfigurableDistributionJobProviderData';

export interface KalturaRainFocusDistributionJobProviderDataArgs  extends KalturaConfigurableDistributionJobProviderDataArgs {
    
}


export class KalturaRainFocusDistributionJobProviderData extends KalturaConfigurableDistributionJobProviderData {

    

    constructor(data? : KalturaRainFocusDistributionJobProviderDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaRainFocusDistributionJobProviderData' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaRainFocusDistributionJobProviderData',KalturaRainFocusDistributionJobProviderData);
