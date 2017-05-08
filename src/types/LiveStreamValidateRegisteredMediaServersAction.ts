
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface LiveStreamValidateRegisteredMediaServersActionArgs  extends KalturaRequestArgs {
    entryId : string;
}

/** 
* Validates all registered media servers
**/
export class LiveStreamValidateRegisteredMediaServersAction extends KalturaRequest<void> {

    entryId : string;

    constructor(data : LiveStreamValidateRegisteredMediaServersActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'livestream'  },
				action : { type : 'c' , default : 'validateRegisteredMediaServers'  },
				entryId : { type : 's'   }
            }
        );
        return result;
    }
}

