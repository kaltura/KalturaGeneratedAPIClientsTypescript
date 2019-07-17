
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaESearchAggregationItem } from './KalturaESearchAggregationItem';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaESearchAggregationArgs  extends KalturaObjectBaseArgs {
    aggregations? : KalturaESearchAggregationItem[];
}


export class KalturaESearchAggregation extends KalturaObjectBase {

    aggregations : KalturaESearchAggregationItem[];

    constructor(data? : KalturaESearchAggregationArgs)
    {
        super(data);
        if (typeof this.aggregations === 'undefined') this.aggregations = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaESearchAggregation' },
				aggregations : { type : 'a', subTypeConstructor : KalturaESearchAggregationItem, subType : 'KalturaESearchAggregationItem' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaESearchAggregation',KalturaESearchAggregation);
