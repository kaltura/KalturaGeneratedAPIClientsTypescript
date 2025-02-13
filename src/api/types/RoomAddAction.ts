
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRoomEntry } from './KalturaRoomEntry';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface RoomAddActionArgs  extends KalturaRequestArgs {
    entry : KalturaRoomEntry;
}

/**
 * Build request payload for service 'room' action 'add'.
 *
 * 
 *
 * Server response type:         KalturaRoomEntry
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class RoomAddAction extends KalturaRequest<KalturaRoomEntry> {

    entry : KalturaRoomEntry;

    constructor(data : RoomAddActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaRoomEntry', responseConstructor : KalturaRoomEntry  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'room_room' },
				action : { type : 'c', default : 'add' },
				entry : { type : 'o', subTypeConstructor : KalturaRoomEntry, subType : 'KalturaRoomEntry' }
            }
        );
        return result;
    }
}

