
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaUserEntryFilter, KalturaUserEntryFilterArgs } from './KalturaUserEntryFilter';

export interface KalturaRegistrationUserEntryFilterArgs  extends KalturaUserEntryFilterArgs {
    
}


export class KalturaRegistrationUserEntryFilter extends KalturaUserEntryFilter {

    

    constructor(data? : KalturaRegistrationUserEntryFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaRegistrationUserEntryFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaRegistrationUserEntryFilter',KalturaRegistrationUserEntryFilter);
