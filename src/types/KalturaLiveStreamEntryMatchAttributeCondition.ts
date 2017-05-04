
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaLiveStreamEntryMatchAttribute } from './KalturaLiveStreamEntryMatchAttribute';
import { KalturaSearchMatchAttributeCondition, KalturaSearchMatchAttributeConditionArgs } from './KalturaSearchMatchAttributeCondition';

export interface KalturaLiveStreamEntryMatchAttributeConditionArgs  extends KalturaSearchMatchAttributeConditionArgs {
    attribute? : KalturaLiveStreamEntryMatchAttribute;
}

/** 
* Auto-generated class.  Used to search KalturaLiveStreamEntry attributes. Use
* KalturaLiveStreamEntryMatchAttribute enum to provide attribute name. /
**/
export class KalturaLiveStreamEntryMatchAttributeCondition extends KalturaSearchMatchAttributeCondition {

    attribute : KalturaLiveStreamEntryMatchAttribute;

    constructor(data? : KalturaLiveStreamEntryMatchAttributeConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c' , default : 'KalturaLiveStreamEntryMatchAttributeCondition' },
				attribute : { type : 'es'  , subType : 'KalturaLiveStreamEntryMatchAttribute'}
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaLiveStreamEntryMatchAttributeCondition',KalturaLiveStreamEntryMatchAttributeCondition);
