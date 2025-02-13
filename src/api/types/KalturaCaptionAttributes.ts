
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaCaptionAttributesArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaCaptionAttributes extends KalturaObjectBase {

    

    constructor(data? : KalturaCaptionAttributesArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCaptionAttributes' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCaptionAttributes',KalturaCaptionAttributes);
