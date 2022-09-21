
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaMultiLingualStringArgs  extends KalturaObjectBaseArgs {
    language? : string;
	value? : string;
}


export class KalturaMultiLingualString extends KalturaObjectBase {

    language : string;
	value : string;

    constructor(data? : KalturaMultiLingualStringArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaMultiLingualString' },
				language : { type : 's' },
				value : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaMultiLingualString',KalturaMultiLingualString);
