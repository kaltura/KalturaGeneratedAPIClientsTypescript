
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaESearchItemDataArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaESearchItemData extends KalturaObjectBase {

    

    constructor(data? : KalturaESearchItemDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaESearchItemData' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaESearchItemData',KalturaESearchItemData);
