
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveStreamEntry } from './KalturaLiveStreamEntry';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface LiveStreamUpdateActionArgs  extends KalturaRequestArgs {
    entryId : string;
	liveStreamEntry : KalturaLiveStreamEntry;
}

/** 
* Update live stream entry. Only the properties that were set will be updated.
**/
export class LiveStreamUpdateAction extends KalturaRequest<KalturaLiveStreamEntry> {

    entryId : string;
	liveStreamEntry : KalturaLiveStreamEntry;

    constructor(data : LiveStreamUpdateActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaLiveStreamEntry', responseConstructor : KalturaLiveStreamEntry  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'livestream' },
				action : { type : 'c', default : 'update' },
				entryId : { type : 's' },
				liveStreamEntry : { type : 'o', subTypeConstructor : KalturaLiveStreamEntry, subType : 'KalturaLiveStreamEntry' }
            }
        );
        return result;
    }
}

