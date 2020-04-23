
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaUserEntry, KalturaUserEntryArgs } from './KalturaUserEntry';

export interface KalturaRegistrationUserEntryArgs  extends KalturaUserEntryArgs {
    
}


export class KalturaRegistrationUserEntry extends KalturaUserEntry {

    

    constructor(data? : KalturaRegistrationUserEntryArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaRegistrationUserEntry' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaRegistrationUserEntry',KalturaRegistrationUserEntry);
