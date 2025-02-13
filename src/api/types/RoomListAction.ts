
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRoomEntryListResponse } from './KalturaRoomEntryListResponse';

import { KalturaRoomEntryFilter } from './KalturaRoomEntryFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface RoomListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaRoomEntryFilter;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'room' action 'list'.
 *
 * 
 *
 * Server response type:         KalturaRoomEntryListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class RoomListAction extends KalturaRequest<KalturaRoomEntryListResponse> {

    filter : KalturaRoomEntryFilter;
	pager : KalturaFilterPager;

    constructor(data? : RoomListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaRoomEntryListResponse', responseConstructor : KalturaRoomEntryListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'room_room' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaRoomEntryFilter, subType : 'KalturaRoomEntryFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

