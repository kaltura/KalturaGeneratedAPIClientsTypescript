
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface LiveChannelValidateRegisteredMediaServersActionArgs  extends KalturaRequestArgs {
    entryId : string;
}

/** 
* Validates all registered media servers
**/
export class LiveChannelValidateRegisteredMediaServersAction extends KalturaRequest<void> {

    entryId : string;

    constructor(data : LiveChannelValidateRegisteredMediaServersActionArgs)
    {
        super(data, 'v', '');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'livechannel' },
				action : { type : 'c' , default : 'validateRegisteredMediaServers' },
				entryId : { type : 's'  }
            }
        );
        return result;
    }
}

