
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaTypedArrayArgs  extends KalturaObjectBaseArgs {
    count? : number;
}


export class KalturaTypedArray extends KalturaObjectBase {

    count : number;

    constructor(data? : KalturaTypedArrayArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaTypedArray' },
				count : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaTypedArray',KalturaTypedArray);
