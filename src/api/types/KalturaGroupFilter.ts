
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaUserFilter, KalturaUserFilterArgs } from './KalturaUserFilter';

export interface KalturaGroupFilterArgs  extends KalturaUserFilterArgs {
    
}


export class KalturaGroupFilter extends KalturaUserFilter {

    

    constructor(data? : KalturaGroupFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaGroupFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaGroupFilter',KalturaGroupFilter);
