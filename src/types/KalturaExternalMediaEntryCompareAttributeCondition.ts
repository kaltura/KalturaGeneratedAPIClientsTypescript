
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaExternalMediaEntryCompareAttribute } from './KalturaExternalMediaEntryCompareAttribute';
import { KalturaSearchComparableAttributeCondition, KalturaSearchComparableAttributeConditionArgs } from './KalturaSearchComparableAttributeCondition';

export interface KalturaExternalMediaEntryCompareAttributeConditionArgs  extends KalturaSearchComparableAttributeConditionArgs {
    attribute? : KalturaExternalMediaEntryCompareAttribute;
}

/** 
* Auto-generated class.  Used to search KalturaExternalMediaEntry attributes. Use
* KalturaExternalMediaEntryCompareAttribute enum to provide attribute name. /
**/
export class KalturaExternalMediaEntryCompareAttributeCondition extends KalturaSearchComparableAttributeCondition {

    attribute : KalturaExternalMediaEntryCompareAttribute;

    constructor(data? : KalturaExternalMediaEntryCompareAttributeConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c' , default : 'KalturaExternalMediaEntryCompareAttributeCondition'  },
				attribute : { type : 'es'   , subType : 'KalturaExternalMediaEntryCompareAttribute'}
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaExternalMediaEntryCompareAttributeCondition',KalturaExternalMediaEntryCompareAttributeCondition);
