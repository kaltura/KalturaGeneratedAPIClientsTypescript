
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaRoomEntryBaseFilter, KalturaRoomEntryBaseFilterArgs } from './KalturaRoomEntryBaseFilter';

export interface KalturaRoomEntryFilterArgs  extends KalturaRoomEntryBaseFilterArgs {
    
}


export class KalturaRoomEntryFilter extends KalturaRoomEntryBaseFilter {

    

    constructor(data? : KalturaRoomEntryFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaRoomEntryFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaRoomEntryFilter',KalturaRoomEntryFilter);
