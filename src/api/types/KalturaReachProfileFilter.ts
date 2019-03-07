
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaReachProfileBaseFilter, KalturaReachProfileBaseFilterArgs } from './KalturaReachProfileBaseFilter';

export interface KalturaReachProfileFilterArgs  extends KalturaReachProfileBaseFilterArgs {
    
}


export class KalturaReachProfileFilter extends KalturaReachProfileBaseFilter {

    

    constructor(data? : KalturaReachProfileFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaReachProfileFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaReachProfileFilter',KalturaReachProfileFilter);
