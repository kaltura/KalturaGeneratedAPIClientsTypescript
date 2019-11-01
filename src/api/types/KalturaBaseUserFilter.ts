
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBaseUserBaseFilter, KalturaBaseUserBaseFilterArgs } from './KalturaBaseUserBaseFilter';

export interface KalturaBaseUserFilterArgs  extends KalturaBaseUserBaseFilterArgs {
    
}


export class KalturaBaseUserFilter extends KalturaBaseUserBaseFilter {

    

    constructor(data? : KalturaBaseUserFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBaseUserFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBaseUserFilter',KalturaBaseUserFilter);
