
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaESearchHistoryAggregateFieldName } from './KalturaESearchHistoryAggregateFieldName';
import { KalturaESearchAggregationItem, KalturaESearchAggregationItemArgs } from './KalturaESearchAggregationItem';

export interface KalturaESearchHistoryAggregationItemArgs  extends KalturaESearchAggregationItemArgs {
    fieldName? : KalturaESearchHistoryAggregateFieldName;
}


export class KalturaESearchHistoryAggregationItem extends KalturaESearchAggregationItem {

    fieldName : KalturaESearchHistoryAggregateFieldName;

    constructor(data? : KalturaESearchHistoryAggregationItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaESearchHistoryAggregationItem' },
				fieldName : { type : 'es', subTypeConstructor : KalturaESearchHistoryAggregateFieldName, subType : 'KalturaESearchHistoryAggregateFieldName' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaESearchHistoryAggregationItem',KalturaESearchHistoryAggregationItem);
