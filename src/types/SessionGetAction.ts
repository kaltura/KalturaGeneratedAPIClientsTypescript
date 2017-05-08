
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSessionInfo } from './KalturaSessionInfo';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SessionGetActionArgs  extends KalturaRequestArgs {
    session? : string;
}

/** 
* Parse session key and return its info
**/
export class SessionGetAction extends KalturaRequest<KalturaSessionInfo> {

    session : string;

    constructor(data? : SessionGetActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaSessionInfo', responseConstructor : KalturaSessionInfo  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'session' },
				action : { type : 'c', default : 'get' },
				session : { type : 's' }
            }
        );
        return result;
    }
}

