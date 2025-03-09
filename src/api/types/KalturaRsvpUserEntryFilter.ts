
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaRsvpUserEntryBaseFilter, KalturaRsvpUserEntryBaseFilterArgs } from './KalturaRsvpUserEntryBaseFilter';

export interface KalturaRsvpUserEntryFilterArgs  extends KalturaRsvpUserEntryBaseFilterArgs {
    
}


export class KalturaRsvpUserEntryFilter extends KalturaRsvpUserEntryBaseFilter {

    

    constructor(data? : KalturaRsvpUserEntryFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaRsvpUserEntryFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaRsvpUserEntryFilter',KalturaRsvpUserEntryFilter);
