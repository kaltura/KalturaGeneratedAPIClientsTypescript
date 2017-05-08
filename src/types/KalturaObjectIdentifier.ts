
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaObjectIdentifierArgs  extends KalturaObjectBaseArgs {
    extendedFeatures? : string;
}

/** 
* Configuration for extended item in the Kaltura MRSS feeds
**/
export class KalturaObjectIdentifier extends KalturaObjectBase {

    extendedFeatures : string;

    constructor(data? : KalturaObjectIdentifierArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c' , default : 'KalturaObjectIdentifier'  },
				extendedFeatures : { type : 's'   }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaObjectIdentifier',KalturaObjectIdentifier);
