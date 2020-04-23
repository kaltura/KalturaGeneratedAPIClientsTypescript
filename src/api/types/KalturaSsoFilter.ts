
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaSsoBaseFilter, KalturaSsoBaseFilterArgs } from './KalturaSsoBaseFilter';

export interface KalturaSsoFilterArgs  extends KalturaSsoBaseFilterArgs {
    
}


export class KalturaSsoFilter extends KalturaSsoBaseFilter {

    

    constructor(data? : KalturaSsoFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSsoFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSsoFilter',KalturaSsoFilter);
