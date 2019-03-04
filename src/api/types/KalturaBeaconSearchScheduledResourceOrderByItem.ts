
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBeaconScheduledResourceOrderByFieldName } from './KalturaBeaconScheduledResourceOrderByFieldName';
import { KalturaESearchOrderByItem, KalturaESearchOrderByItemArgs } from './KalturaESearchOrderByItem';

export interface KalturaBeaconSearchScheduledResourceOrderByItemArgs  extends KalturaESearchOrderByItemArgs {
    sortField? : KalturaBeaconScheduledResourceOrderByFieldName;
}


export class KalturaBeaconSearchScheduledResourceOrderByItem extends KalturaESearchOrderByItem {

    sortField : KalturaBeaconScheduledResourceOrderByFieldName;

    constructor(data? : KalturaBeaconSearchScheduledResourceOrderByItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBeaconSearchScheduledResourceOrderByItem' },
				sortField : { type : 'es', subTypeConstructor : KalturaBeaconScheduledResourceOrderByFieldName, subType : 'KalturaBeaconScheduledResourceOrderByFieldName' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBeaconSearchScheduledResourceOrderByItem',KalturaBeaconSearchScheduledResourceOrderByItem);
