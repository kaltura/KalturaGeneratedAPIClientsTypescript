
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaString } from './KalturaString';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaStringArrayObjectArgs  extends KalturaObjectBaseArgs {
    value? : KalturaString[];
}


export class KalturaStringArrayObject extends KalturaObjectBase {

    value : KalturaString[];

    constructor(data? : KalturaStringArrayObjectArgs)
    {
        super(data);
        if (typeof this.value === 'undefined') this.value = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaStringArrayObject' },
				value : { type : 'a', subTypeConstructor : KalturaString, subType : 'KalturaString' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaStringArrayObject',KalturaStringArrayObject);
