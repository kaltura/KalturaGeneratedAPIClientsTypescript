
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaStringValue, KalturaStringValueArgs } from './KalturaStringValue';

export interface KalturaStringFieldArgs  extends KalturaStringValueArgs {
    
}

/** 
* A string representation to return evaluated dynamic value
**/
export class KalturaStringField extends KalturaStringValue {

    

    constructor(data? : KalturaStringFieldArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaStringField' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaStringField',KalturaStringField);
