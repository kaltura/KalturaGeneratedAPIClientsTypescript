
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRoomEntry } from './KalturaRoomEntry';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface RoomGetActionArgs  extends KalturaRequestArgs {
    roomId : string;
}

/**
 * Build request payload for service 'room' action 'get'.
 *
 * 
 *
 * Server response type:         KalturaRoomEntry
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class RoomGetAction extends KalturaRequest<KalturaRoomEntry> {

    roomId : string;

    constructor(data : RoomGetActionArgs)
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
				action : { type : 'c', default : 'get' },
				roomId : { type : 's' }
            }
        );
        return result;
    }
}

