
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRoomEntry } from './KalturaRoomEntry';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface RoomUpdateActionArgs  extends KalturaRequestArgs {
    roomId : string;
	room : KalturaRoomEntry;
}

/**
 * Build request payload for service 'room' action 'update'.
 *
 * 
 *
 * Server response type:         KalturaRoomEntry
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class RoomUpdateAction extends KalturaRequest<KalturaRoomEntry> {

    roomId : string;
	room : KalturaRoomEntry;

    constructor(data : RoomUpdateActionArgs)
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
				action : { type : 'c', default : 'update' },
				roomId : { type : 's' },
				room : { type : 'o', subTypeConstructor : KalturaRoomEntry, subType : 'KalturaRoomEntry' }
            }
        );
        return result;
    }
}

