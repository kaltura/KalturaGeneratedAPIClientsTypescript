
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPlayReadyContentKey } from './KalturaPlayReadyContentKey';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PlayReadyDrmGetContentKeysActionArgs  extends KalturaRequestArgs {
    keyIds : string;
}

/** 
* Get content keys for input key ids
**/
export class PlayReadyDrmGetContentKeysAction extends KalturaRequest<KalturaPlayReadyContentKey[]> {

    keyIds : string;

    constructor(data : PlayReadyDrmGetContentKeysActionArgs)
    {
        super(data, {responseType : 'a', responseSubType : 'KalturaPlayReadyContentKey', responseConstructor : KalturaPlayReadyContentKey  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'playready_playreadydrm'  },
				action : { type : 'c' , default : 'getContentKeys'  },
				keyIds : { type : 's'   }
            }
        );
        return result;
    }
}

