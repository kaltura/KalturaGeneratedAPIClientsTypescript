
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaRoomType } from './KalturaRoomType';
import { KalturaBaseEntry, KalturaBaseEntryArgs } from './KalturaBaseEntry';

export interface KalturaRoomEntryArgs  extends KalturaBaseEntryArgs {
    roomType? : KalturaRoomType;
	broadcastEntryId? : string;
	templateRoomEntryId? : string;
}


export class KalturaRoomEntry extends KalturaBaseEntry {

    roomType : KalturaRoomType;
	broadcastEntryId : string;
	templateRoomEntryId : string;

    constructor(data? : KalturaRoomEntryArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaRoomEntry' },
				roomType : { type : 'en', subTypeConstructor : KalturaRoomType, subType : 'KalturaRoomType' },
				broadcastEntryId : { type : 's' },
				templateRoomEntryId : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaRoomEntry',KalturaRoomEntry);
