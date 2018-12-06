
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaESearchBaseItem, KalturaESearchBaseItemArgs } from './KalturaESearchBaseItem';

export interface KalturaBeaconScheduledResourceBaseItemArgs  extends KalturaESearchBaseItemArgs {
    
}


export class KalturaBeaconScheduledResourceBaseItem extends KalturaESearchBaseItem {

    

    constructor(data? : KalturaBeaconScheduledResourceBaseItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBeaconScheduledResourceBaseItem' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBeaconScheduledResourceBaseItem',KalturaBeaconScheduledResourceBaseItem);
