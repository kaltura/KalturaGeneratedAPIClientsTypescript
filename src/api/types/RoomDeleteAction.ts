
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface RoomDeleteActionArgs  extends KalturaRequestArgs {
    roomId : string;
}

/**
 * Build request payload for service 'room' action 'delete'.
 *
 * 
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class RoomDeleteAction extends KalturaRequest<void> {

    roomId : string;

    constructor(data : RoomDeleteActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'room_room' },
				action : { type : 'c', default : 'delete' },
				roomId : { type : 's' }
            }
        );
        return result;
    }
}

