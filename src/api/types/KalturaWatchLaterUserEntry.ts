
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaUserEntry, KalturaUserEntryArgs } from './KalturaUserEntry';

export interface KalturaWatchLaterUserEntryArgs  extends KalturaUserEntryArgs {
    
}


export class KalturaWatchLaterUserEntry extends KalturaUserEntry {

    

    constructor(data? : KalturaWatchLaterUserEntryArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaWatchLaterUserEntry' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaWatchLaterUserEntry',KalturaWatchLaterUserEntry);
