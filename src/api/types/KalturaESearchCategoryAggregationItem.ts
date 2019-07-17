
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaESearchCategoryAggregateByFieldName } from './KalturaESearchCategoryAggregateByFieldName';
import { KalturaESearchAggregationItem, KalturaESearchAggregationItemArgs } from './KalturaESearchAggregationItem';

export interface KalturaESearchCategoryAggregationItemArgs  extends KalturaESearchAggregationItemArgs {
    fieldName? : KalturaESearchCategoryAggregateByFieldName;
}


export class KalturaESearchCategoryAggregationItem extends KalturaESearchAggregationItem {

    fieldName : KalturaESearchCategoryAggregateByFieldName;

    constructor(data? : KalturaESearchCategoryAggregationItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaESearchCategoryAggregationItem' },
				fieldName : { type : 'es', subTypeConstructor : KalturaESearchCategoryAggregateByFieldName, subType : 'KalturaESearchCategoryAggregateByFieldName' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaESearchCategoryAggregationItem',KalturaESearchCategoryAggregationItem);
