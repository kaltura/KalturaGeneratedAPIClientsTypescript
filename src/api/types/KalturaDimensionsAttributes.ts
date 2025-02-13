
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaDimensionsAttributesArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaDimensionsAttributes extends KalturaObjectBase {

    

    constructor(data? : KalturaDimensionsAttributesArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDimensionsAttributes' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDimensionsAttributes',KalturaDimensionsAttributes);
