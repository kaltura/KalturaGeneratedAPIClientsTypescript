
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDistributionProvider, KalturaDistributionProviderArgs } from './KalturaDistributionProvider';

export interface KalturaRainFocusDistributionProviderArgs  extends KalturaDistributionProviderArgs {
    
}


export class KalturaRainFocusDistributionProvider extends KalturaDistributionProvider {

    

    constructor(data? : KalturaRainFocusDistributionProviderArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaRainFocusDistributionProvider' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaRainFocusDistributionProvider',KalturaRainFocusDistributionProvider);
