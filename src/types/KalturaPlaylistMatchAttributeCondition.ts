
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaPlaylistMatchAttribute } from './KalturaPlaylistMatchAttribute';
import { KalturaSearchMatchAttributeCondition, KalturaSearchMatchAttributeConditionArgs } from './KalturaSearchMatchAttributeCondition';

export interface KalturaPlaylistMatchAttributeConditionArgs  extends KalturaSearchMatchAttributeConditionArgs {
    attribute? : KalturaPlaylistMatchAttribute;
}

/** 
* Auto-generated class.  Used to search KalturaPlaylist attributes. Use
* KalturaPlaylistMatchAttribute enum to provide attribute name. /
**/
export class KalturaPlaylistMatchAttributeCondition extends KalturaSearchMatchAttributeCondition {

    attribute : KalturaPlaylistMatchAttribute;

    constructor(data? : KalturaPlaylistMatchAttributeConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c' , default : 'KalturaPlaylistMatchAttributeCondition' },
				attribute : { type : 'es'  , subType : 'KalturaPlaylistMatchAttribute'}
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPlaylistMatchAttributeCondition',KalturaPlaylistMatchAttributeCondition);
