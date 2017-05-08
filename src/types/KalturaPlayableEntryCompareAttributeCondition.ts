
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaPlayableEntryCompareAttribute } from './KalturaPlayableEntryCompareAttribute';
import { KalturaSearchComparableAttributeCondition, KalturaSearchComparableAttributeConditionArgs } from './KalturaSearchComparableAttributeCondition';

export interface KalturaPlayableEntryCompareAttributeConditionArgs  extends KalturaSearchComparableAttributeConditionArgs {
    attribute? : KalturaPlayableEntryCompareAttribute;
}

/** 
* Auto-generated class.  Used to search KalturaPlayableEntry attributes. Use
* KalturaPlayableEntryCompareAttribute enum to provide attribute name. /
**/
export class KalturaPlayableEntryCompareAttributeCondition extends KalturaSearchComparableAttributeCondition {

    attribute : KalturaPlayableEntryCompareAttribute;

    constructor(data? : KalturaPlayableEntryCompareAttributeConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPlayableEntryCompareAttributeCondition' },
				attribute : { type : 'es', subTypeConstructor : KalturaPlayableEntryCompareAttribute, subType : 'KalturaPlayableEntryCompareAttribute' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPlayableEntryCompareAttributeCondition',KalturaPlayableEntryCompareAttributeCondition);
