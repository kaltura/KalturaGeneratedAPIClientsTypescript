
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveStreamEntry } from './KalturaLiveStreamEntry';

import { KalturaEntryServerNodeType } from './KalturaEntryServerNodeType';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface LiveStreamAuthenticateActionArgs  extends KalturaRequestArgs {
    entryId : string;
	token : string;
	hostname? : string;
	mediaServerIndex? : KalturaEntryServerNodeType;
	applicationName? : string;
}

/** 
* Authenticate live-stream entry against stream token and partner limitations
**/
export class LiveStreamAuthenticateAction extends KalturaRequest<KalturaLiveStreamEntry> {

    entryId : string;
	token : string;
	hostname : string;
	mediaServerIndex : KalturaEntryServerNodeType;
	applicationName : string;

    constructor(data : LiveStreamAuthenticateActionArgs)
    {
        super(data, 'o', 'KalturaLiveStreamEntry');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'livestream' },
				action : { type : 'c' , default : 'authenticate' },
				entryId : { type : 's'  },
				token : { type : 's'  },
				hostname : { type : 's'  },
				mediaServerIndex : { type : 'es'  , subType : 'KalturaEntryServerNodeType'},
				applicationName : { type : 's'  }
            }
        );
        return result;
    }
}

