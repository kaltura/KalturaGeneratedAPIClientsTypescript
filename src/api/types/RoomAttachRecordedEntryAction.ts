
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMediaEntry } from './KalturaMediaEntry';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface RoomAttachRecordedEntryActionArgs  extends KalturaRequestArgs {
    roomEntryId : string;
	mediaEntryId : string;
}

/**
 * Build request payload for service 'room' action 'attachRecordedEntry'.
 *
 * 
 *
 * Server response type:         KalturaMediaEntry
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class RoomAttachRecordedEntryAction extends KalturaRequest<KalturaMediaEntry> {

    roomEntryId : string;
	mediaEntryId : string;

    constructor(data : RoomAttachRecordedEntryActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaMediaEntry', responseConstructor : KalturaMediaEntry  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'room_room' },
				action : { type : 'c', default : 'attachRecordedEntry' },
				roomEntryId : { type : 's' },
				mediaEntryId : { type : 's' }
            }
        );
        return result;
    }
}

