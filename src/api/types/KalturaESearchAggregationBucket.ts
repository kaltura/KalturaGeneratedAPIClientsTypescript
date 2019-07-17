
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaESearchAggregationBucketArgs  extends KalturaObjectBaseArgs {
    value? : string;
	count? : number;
}


export class KalturaESearchAggregationBucket extends KalturaObjectBase {

    value : string;
	count : number;

    constructor(data? : KalturaESearchAggregationBucketArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaESearchAggregationBucket' },
				value : { type : 's' },
				count : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaESearchAggregationBucket',KalturaESearchAggregationBucket);
