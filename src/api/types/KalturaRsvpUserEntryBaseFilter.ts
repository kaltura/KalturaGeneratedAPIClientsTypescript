
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaUserEntryFilter, KalturaUserEntryFilterArgs } from './KalturaUserEntryFilter';

export interface KalturaRsvpUserEntryBaseFilterArgs  extends KalturaUserEntryFilterArgs {
    
}


export class KalturaRsvpUserEntryBaseFilter extends KalturaUserEntryFilter {

    

    constructor(data? : KalturaRsvpUserEntryBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaRsvpUserEntryBaseFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaRsvpUserEntryBaseFilter',KalturaRsvpUserEntryBaseFilter);
