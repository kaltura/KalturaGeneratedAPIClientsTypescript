
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaVirtualEventBaseFilter, KalturaVirtualEventBaseFilterArgs } from './KalturaVirtualEventBaseFilter';

export interface KalturaVirtualEventFilterArgs  extends KalturaVirtualEventBaseFilterArgs {
    
}


export class KalturaVirtualEventFilter extends KalturaVirtualEventBaseFilter {

    

    constructor(data? : KalturaVirtualEventFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaVirtualEventFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaVirtualEventFilter',KalturaVirtualEventFilter);
