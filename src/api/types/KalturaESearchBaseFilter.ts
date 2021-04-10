
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaESearchBaseFilterArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaESearchBaseFilter extends KalturaObjectBase {

    

    constructor(data? : KalturaESearchBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaESearchBaseFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaESearchBaseFilter',KalturaESearchBaseFilter);
