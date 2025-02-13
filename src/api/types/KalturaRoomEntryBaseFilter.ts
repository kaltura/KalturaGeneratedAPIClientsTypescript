
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaRoomType } from './KalturaRoomType';
import { KalturaBaseEntryFilter, KalturaBaseEntryFilterArgs } from './KalturaBaseEntryFilter';

export interface KalturaRoomEntryBaseFilterArgs  extends KalturaBaseEntryFilterArgs {
    roomTypeEqual? : KalturaRoomType;
}


export class KalturaRoomEntryBaseFilter extends KalturaBaseEntryFilter {

    roomTypeEqual : KalturaRoomType;

    constructor(data? : KalturaRoomEntryBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaRoomEntryBaseFilter' },
				roomTypeEqual : { type : 'en', subTypeConstructor : KalturaRoomType, subType : 'KalturaRoomType' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaRoomEntryBaseFilter',KalturaRoomEntryBaseFilter);
