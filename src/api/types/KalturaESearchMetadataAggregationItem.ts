
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaESearchMetadataAggregateByFieldName } from './KalturaESearchMetadataAggregateByFieldName';
import { KalturaESearchAggregationItem, KalturaESearchAggregationItemArgs } from './KalturaESearchAggregationItem';

export interface KalturaESearchMetadataAggregationItemArgs  extends KalturaESearchAggregationItemArgs {
    fieldName? : KalturaESearchMetadataAggregateByFieldName;
}


export class KalturaESearchMetadataAggregationItem extends KalturaESearchAggregationItem {

    fieldName : KalturaESearchMetadataAggregateByFieldName;

    constructor(data? : KalturaESearchMetadataAggregationItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaESearchMetadataAggregationItem' },
				fieldName : { type : 'es', subTypeConstructor : KalturaESearchMetadataAggregateByFieldName, subType : 'KalturaESearchMetadataAggregateByFieldName' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaESearchMetadataAggregationItem',KalturaESearchMetadataAggregationItem);
