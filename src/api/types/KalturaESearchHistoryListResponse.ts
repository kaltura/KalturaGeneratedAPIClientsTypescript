
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaESearchHistory } from './KalturaESearchHistory';
import { KalturaESearchAggregationResponseItem } from './KalturaESearchAggregationResponseItem';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaESearchHistoryListResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaESearchHistoryListResponse extends KalturaListResponse {

    readonly objects : KalturaESearchHistory[];
	readonly aggregations : KalturaESearchAggregationResponseItem[];

    constructor(data? : KalturaESearchHistoryListResponseArgs)
    {
        super(data);
        if (typeof this.objects === 'undefined') this.objects = [];
		if (typeof this.aggregations === 'undefined') this.aggregations = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaESearchHistoryListResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaESearchHistory, subType : 'KalturaESearchHistory' },
				aggregations : { type : 'a', readOnly : true, subTypeConstructor : KalturaESearchAggregationResponseItem, subType : 'KalturaESearchAggregationResponseItem' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaESearchHistoryListResponse',KalturaESearchHistoryListResponse);
