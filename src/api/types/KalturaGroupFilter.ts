
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaGroupType } from './KalturaGroupType';
import { KalturaUserFilter, KalturaUserFilterArgs } from './KalturaUserFilter';

export interface KalturaGroupFilterArgs  extends KalturaUserFilterArgs {
    groupType? : KalturaGroupType;
}


export class KalturaGroupFilter extends KalturaUserFilter {

    groupType : KalturaGroupType;

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
                objectType : { type : 'c', default : 'KalturaGroupFilter' },
				groupType : { type : 'en', subTypeConstructor : KalturaGroupType, subType : 'KalturaGroupType' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaGroupFilter',KalturaGroupFilter);
