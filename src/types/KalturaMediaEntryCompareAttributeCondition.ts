
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaMediaEntryCompareAttribute } from './KalturaMediaEntryCompareAttribute';
import { KalturaSearchComparableAttributeCondition, KalturaSearchComparableAttributeConditionArgs } from './KalturaSearchComparableAttributeCondition';

export interface KalturaMediaEntryCompareAttributeConditionArgs  extends KalturaSearchComparableAttributeConditionArgs {
    attribute? : KalturaMediaEntryCompareAttribute;
}

/** 
* Auto-generated class.  Used to search KalturaMediaEntry attributes. Use
* KalturaMediaEntryCompareAttribute enum to provide attribute name. /
**/
export class KalturaMediaEntryCompareAttributeCondition extends KalturaSearchComparableAttributeCondition {

    attribute : KalturaMediaEntryCompareAttribute;

    constructor(data? : KalturaMediaEntryCompareAttributeConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaMediaEntryCompareAttributeCondition' },
				attribute : { type : 'es', subTypeConstructor : KalturaMediaEntryCompareAttribute, subType : 'KalturaMediaEntryCompareAttribute' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaMediaEntryCompareAttributeCondition',KalturaMediaEntryCompareAttributeCondition);
