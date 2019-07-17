
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaESearchAggregationItemArgs  extends KalturaObjectBaseArgs {
    size? : number;
}


export class KalturaESearchAggregationItem extends KalturaObjectBase {

    size : number;

    constructor(data? : KalturaESearchAggregationItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaESearchAggregationItem' },
				size : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaESearchAggregationItem',KalturaESearchAggregationItem);
