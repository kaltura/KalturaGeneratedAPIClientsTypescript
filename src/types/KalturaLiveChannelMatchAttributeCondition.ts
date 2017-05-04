
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaLiveChannelMatchAttribute } from './KalturaLiveChannelMatchAttribute';
import { KalturaSearchMatchAttributeCondition, KalturaSearchMatchAttributeConditionArgs } from './KalturaSearchMatchAttributeCondition';

export interface KalturaLiveChannelMatchAttributeConditionArgs  extends KalturaSearchMatchAttributeConditionArgs {
    attribute? : KalturaLiveChannelMatchAttribute;
}

/** 
* Auto-generated class.  Used to search KalturaLiveChannel attributes. Use
* KalturaLiveChannelMatchAttribute enum to provide attribute name. /
**/
export class KalturaLiveChannelMatchAttributeCondition extends KalturaSearchMatchAttributeCondition {

    attribute : KalturaLiveChannelMatchAttribute;

    constructor(data? : KalturaLiveChannelMatchAttributeConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c' , default : 'KalturaLiveChannelMatchAttributeCondition' },
				attribute : { type : 'es'  , subType : 'KalturaLiveChannelMatchAttribute'}
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaLiveChannelMatchAttributeCondition',KalturaLiveChannelMatchAttributeCondition);
