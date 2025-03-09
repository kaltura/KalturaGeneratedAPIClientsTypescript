
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaUserEntry, KalturaUserEntryArgs } from './KalturaUserEntry';

export interface KalturaRsvpUserEntryArgs  extends KalturaUserEntryArgs {
    
}


export class KalturaRsvpUserEntry extends KalturaUserEntry {

    

    constructor(data? : KalturaRsvpUserEntryArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaRsvpUserEntry' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaRsvpUserEntry',KalturaRsvpUserEntry);
