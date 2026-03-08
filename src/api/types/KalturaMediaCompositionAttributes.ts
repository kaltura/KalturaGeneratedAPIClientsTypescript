
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaMediaCompositionAttributesArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaMediaCompositionAttributes extends KalturaObjectBase {

    

    constructor(data? : KalturaMediaCompositionAttributesArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaMediaCompositionAttributes' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaMediaCompositionAttributes',KalturaMediaCompositionAttributes);
