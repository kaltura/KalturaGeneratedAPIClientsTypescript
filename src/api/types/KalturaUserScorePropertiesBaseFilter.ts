
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaRelatedFilter, KalturaRelatedFilterArgs } from './KalturaRelatedFilter';

export interface KalturaUserScorePropertiesBaseFilterArgs  extends KalturaRelatedFilterArgs {
    
}


export class KalturaUserScorePropertiesBaseFilter extends KalturaRelatedFilter {

    

    constructor(data? : KalturaUserScorePropertiesBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUserScorePropertiesBaseFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaUserScorePropertiesBaseFilter',KalturaUserScorePropertiesBaseFilter);
