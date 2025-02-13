
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaRegexItemArgs  extends KalturaObjectBaseArgs {
    regex? : string;
	description? : string;
}


export class KalturaRegexItem extends KalturaObjectBase {

    regex : string;
	description : string;

    constructor(data? : KalturaRegexItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaRegexItem' },
				regex : { type : 's' },
				description : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaRegexItem',KalturaRegexItem);
