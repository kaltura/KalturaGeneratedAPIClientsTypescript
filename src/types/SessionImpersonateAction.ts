
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaSessionType } from './KalturaSessionType';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SessionImpersonateActionArgs  extends KalturaRequestArgs {
    secret : string;
	impersonatedPartnerId : number;
	userId? : string;
	type? : KalturaSessionType;
	partnerId? : number;
	expiry? : number;
	privileges? : string;
}

/** 
* Start an impersonated session with Kaltura's server.   The result KS is the
* session key that you should pass to all services that requires a ticket.
**/
export class SessionImpersonateAction extends KalturaRequest<string> {

    secret : string;
	impersonatedPartnerId : number;
	userId : string;
	type : KalturaSessionType;
	partnerId : number;
	expiry : number;
	privileges : string;

    constructor(data : SessionImpersonateActionArgs)
    {
        super(data, 's', '');
        if (typeof this.expiry === 'undefined') this.expiry = 86400;
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'session' },
				action : { type : 'c' , default : 'impersonate' },
				secret : { type : 's'  },
				impersonatedPartnerId : { type : 'n'  },
				userId : { type : 's'  },
				type : { type : 'en'  , subType : 'KalturaSessionType'},
				partnerId : { type : 'n'  },
				expiry : { type : 'n'  },
				privileges : { type : 's'  }
            }
        );
        return result;
    }
}

