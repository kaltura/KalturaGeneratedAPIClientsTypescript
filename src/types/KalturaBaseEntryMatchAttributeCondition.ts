
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBaseEntryMatchAttribute } from './KalturaBaseEntryMatchAttribute';
import { KalturaSearchMatchAttributeCondition, KalturaSearchMatchAttributeConditionArgs } from './KalturaSearchMatchAttributeCondition';

export interface KalturaBaseEntryMatchAttributeConditionArgs  extends KalturaSearchMatchAttributeConditionArgs {
    attribute? : KalturaBaseEntryMatchAttribute;
}

/** 
* Auto-generated class.  Used to search KalturaBaseEntry attributes. Use
* KalturaBaseEntryMatchAttribute enum to provide attribute name. /
**/
export class KalturaBaseEntryMatchAttributeCondition extends KalturaSearchMatchAttributeCondition {

    attribute : KalturaBaseEntryMatchAttribute;

    constructor(data? : KalturaBaseEntryMatchAttributeConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c' , default : 'KalturaBaseEntryMatchAttributeCondition' },
				attribute : { type : 'es'  , subType : 'KalturaBaseEntryMatchAttribute'}
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBaseEntryMatchAttributeCondition',KalturaBaseEntryMatchAttributeCondition);
