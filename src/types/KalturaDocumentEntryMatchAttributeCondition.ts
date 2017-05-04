
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDocumentEntryMatchAttribute } from './KalturaDocumentEntryMatchAttribute';
import { KalturaSearchMatchAttributeCondition, KalturaSearchMatchAttributeConditionArgs } from './KalturaSearchMatchAttributeCondition';

export interface KalturaDocumentEntryMatchAttributeConditionArgs  extends KalturaSearchMatchAttributeConditionArgs {
    attribute? : KalturaDocumentEntryMatchAttribute;
}

/** 
* Auto-generated class.  Used to search KalturaDocumentEntry attributes. Use
* KalturaDocumentEntryMatchAttribute enum to provide attribute name. /
**/
export class KalturaDocumentEntryMatchAttributeCondition extends KalturaSearchMatchAttributeCondition {

    attribute : KalturaDocumentEntryMatchAttribute;

    constructor(data? : KalturaDocumentEntryMatchAttributeConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c' , default : 'KalturaDocumentEntryMatchAttributeCondition' },
				attribute : { type : 'es'  , subType : 'KalturaDocumentEntryMatchAttribute'}
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDocumentEntryMatchAttributeCondition',KalturaDocumentEntryMatchAttributeCondition);
