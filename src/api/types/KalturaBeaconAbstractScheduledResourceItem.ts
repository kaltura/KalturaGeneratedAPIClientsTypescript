
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaESearchItemType } from './KalturaESearchItemType';
import { KalturaESearchRange } from './KalturaESearchRange';
import { KalturaBeaconScheduledResourceBaseItem, KalturaBeaconScheduledResourceBaseItemArgs } from './KalturaBeaconScheduledResourceBaseItem';

export interface KalturaBeaconAbstractScheduledResourceItemArgs  extends KalturaBeaconScheduledResourceBaseItemArgs {
    searchTerm? : string;
	itemType? : KalturaESearchItemType;
	range? : KalturaESearchRange;
}


export class KalturaBeaconAbstractScheduledResourceItem extends KalturaBeaconScheduledResourceBaseItem {

    searchTerm : string;
	itemType : KalturaESearchItemType;
	range : KalturaESearchRange;

    constructor(data? : KalturaBeaconAbstractScheduledResourceItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBeaconAbstractScheduledResourceItem' },
				searchTerm : { type : 's' },
				itemType : { type : 'en', subTypeConstructor : KalturaESearchItemType, subType : 'KalturaESearchItemType' },
				range : { type : 'o', subTypeConstructor : KalturaESearchRange, subType : 'KalturaESearchRange' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBeaconAbstractScheduledResourceItem',KalturaBeaconAbstractScheduledResourceItem);
