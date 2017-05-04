
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaMediaEntryMatchAttribute } from './KalturaMediaEntryMatchAttribute';
import { KalturaSearchMatchAttributeCondition, KalturaSearchMatchAttributeConditionArgs } from './KalturaSearchMatchAttributeCondition';

export interface KalturaMediaEntryMatchAttributeConditionArgs  extends KalturaSearchMatchAttributeConditionArgs {
    attribute? : KalturaMediaEntryMatchAttribute;
}

/** 
* Auto-generated class.  Used to search KalturaMediaEntry attributes. Use
* KalturaMediaEntryMatchAttribute enum to provide attribute name. /
**/
export class KalturaMediaEntryMatchAttributeCondition extends KalturaSearchMatchAttributeCondition {

    attribute : KalturaMediaEntryMatchAttribute;

    constructor(data? : KalturaMediaEntryMatchAttributeConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c' , default : 'KalturaMediaEntryMatchAttributeCondition' },
				attribute : { type : 'es'  , subType : 'KalturaMediaEntryMatchAttribute'}
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaMediaEntryMatchAttributeCondition',KalturaMediaEntryMatchAttributeCondition);
