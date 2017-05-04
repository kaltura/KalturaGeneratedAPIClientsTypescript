
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPlayReadyContentKey } from './KalturaPlayReadyContentKey';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PlayReadyDrmGetEntryContentKeyActionArgs  extends KalturaRequestArgs {
    entryId : string;
	createIfMissing? : boolean;
}

/** 
* Get content key and key id for the given entry
**/
export class PlayReadyDrmGetEntryContentKeyAction extends KalturaRequest<KalturaPlayReadyContentKey> {

    entryId : string;
	createIfMissing : boolean;

    constructor(data : PlayReadyDrmGetEntryContentKeyActionArgs)
    {
        super(data, 'o', 'KalturaPlayReadyContentKey');
        if (typeof this.createIfMissing === 'undefined') this.createIfMissing = false;
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'playready_playreadydrm' },
				action : { type : 'c' , default : 'getEntryContentKey' },
				entryId : { type : 's'  },
				createIfMissing : { type : 'b'  }
            }
        );
        return result;
    }
}

