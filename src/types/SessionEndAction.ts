
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SessionEndActionArgs  extends KalturaRequestArgs {
    
}

/** 
* End a session with the Kaltura server, making the current KS invalid.
**/
export class SessionEndAction extends KalturaRequest<void> {

    

    constructor(data? : SessionEndActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'session'  },
				action : { type : 'c' , default : 'end'  }
            }
        );
        return result;
    }
}

