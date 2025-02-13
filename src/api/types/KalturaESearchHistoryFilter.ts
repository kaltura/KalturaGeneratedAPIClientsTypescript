
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaESearchRange } from './KalturaESearchRange';
import { KalturaESearchHistoryAggregationItem } from './KalturaESearchHistoryAggregationItem';
import { KalturaESearchBaseFilter, KalturaESearchBaseFilterArgs } from './KalturaESearchBaseFilter';

export interface KalturaESearchHistoryFilterArgs  extends KalturaESearchBaseFilterArgs {
    searchTermStartsWith? : string;
	searchedObjectIn? : string;
	timestampRange? : KalturaESearchRange;
	aggregation? : KalturaESearchHistoryAggregationItem;
}


export class KalturaESearchHistoryFilter extends KalturaESearchBaseFilter {

    searchTermStartsWith : string;
	searchedObjectIn : string;
	timestampRange : KalturaESearchRange;
	aggregation : KalturaESearchHistoryAggregationItem;

    constructor(data? : KalturaESearchHistoryFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaESearchHistoryFilter' },
				searchTermStartsWith : { type : 's' },
				searchedObjectIn : { type : 's' },
				timestampRange : { type : 'o', subTypeConstructor : KalturaESearchRange, subType : 'KalturaESearchRange' },
				aggregation : { type : 'o', subTypeConstructor : KalturaESearchHistoryAggregationItem, subType : 'KalturaESearchHistoryAggregationItem' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaESearchHistoryFilter',KalturaESearchHistoryFilter);
