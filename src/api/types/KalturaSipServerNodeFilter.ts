
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaSipServerNodeBaseFilter, KalturaSipServerNodeBaseFilterArgs } from './KalturaSipServerNodeBaseFilter';

export interface KalturaSipServerNodeFilterArgs  extends KalturaSipServerNodeBaseFilterArgs {
    
}


export class KalturaSipServerNodeFilter extends KalturaSipServerNodeBaseFilter {

    

    constructor(data? : KalturaSipServerNodeFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSipServerNodeFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSipServerNodeFilter',KalturaSipServerNodeFilter);
