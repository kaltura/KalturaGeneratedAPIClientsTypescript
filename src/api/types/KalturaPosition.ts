
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaPositionArgs  extends KalturaObjectBaseArgs {
    x? : number;
	y? : number;
}


export class KalturaPosition extends KalturaObjectBase {

    x : number;
	y : number;

    constructor(data? : KalturaPositionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPosition' },
				x : { type : 'n' },
				y : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPosition',KalturaPosition);
