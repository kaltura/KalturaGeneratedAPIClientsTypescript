
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaESearchGroupOrderByFieldName } from './KalturaESearchGroupOrderByFieldName';
import { KalturaESearchOrderByItem, KalturaESearchOrderByItemArgs } from './KalturaESearchOrderByItem';

export interface KalturaESearchGroupOrderByItemArgs  extends KalturaESearchOrderByItemArgs {
    sortField? : KalturaESearchGroupOrderByFieldName;
}


export class KalturaESearchGroupOrderByItem extends KalturaESearchOrderByItem {

    sortField : KalturaESearchGroupOrderByFieldName;

    constructor(data? : KalturaESearchGroupOrderByItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaESearchGroupOrderByItem' },
				sortField : { type : 'es', subTypeConstructor : KalturaESearchGroupOrderByFieldName, subType : 'KalturaESearchGroupOrderByFieldName' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaESearchGroupOrderByItem',KalturaESearchGroupOrderByItem);
