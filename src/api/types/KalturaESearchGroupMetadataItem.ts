
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaESearchUserMetadataItem, KalturaESearchUserMetadataItemArgs } from './KalturaESearchUserMetadataItem';

export interface KalturaESearchGroupMetadataItemArgs  extends KalturaESearchUserMetadataItemArgs {
    
}


export class KalturaESearchGroupMetadataItem extends KalturaESearchUserMetadataItem {

    

    constructor(data? : KalturaESearchGroupMetadataItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaESearchGroupMetadataItem' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaESearchGroupMetadataItem',KalturaESearchGroupMetadataItem);
