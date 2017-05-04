
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDeliveryServerNodeFilter, KalturaDeliveryServerNodeFilterArgs } from './KalturaDeliveryServerNodeFilter';

export interface KalturaEdgeServerNodeBaseFilterArgs  extends KalturaDeliveryServerNodeFilterArgs {
    
}


export class KalturaEdgeServerNodeBaseFilter extends KalturaDeliveryServerNodeFilter {

    

    constructor(data? : KalturaEdgeServerNodeBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c' , default : 'KalturaEdgeServerNodeBaseFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaEdgeServerNodeBaseFilter',KalturaEdgeServerNodeBaseFilter);
