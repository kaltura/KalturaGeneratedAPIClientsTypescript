
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaLiveEntryMatchAttribute } from './KalturaLiveEntryMatchAttribute';
import { KalturaSearchMatchAttributeCondition, KalturaSearchMatchAttributeConditionArgs } from './KalturaSearchMatchAttributeCondition';

export interface KalturaLiveEntryMatchAttributeConditionArgs  extends KalturaSearchMatchAttributeConditionArgs {
    attribute? : KalturaLiveEntryMatchAttribute;
}

/** 
* Auto-generated class.  Used to search KalturaLiveEntry attributes. Use
* KalturaLiveEntryMatchAttribute enum to provide attribute name. /
**/
export class KalturaLiveEntryMatchAttributeCondition extends KalturaSearchMatchAttributeCondition {

    attribute : KalturaLiveEntryMatchAttribute;

    constructor(data? : KalturaLiveEntryMatchAttributeConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c' , default : 'KalturaLiveEntryMatchAttributeCondition'  },
				attribute : { type : 'es'   , subType : 'KalturaLiveEntryMatchAttribute'}
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaLiveEntryMatchAttributeCondition',KalturaLiveEntryMatchAttributeCondition);
