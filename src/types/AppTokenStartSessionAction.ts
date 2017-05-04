
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSessionInfo } from './KalturaSessionInfo';

import { KalturaSessionType } from './KalturaSessionType';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AppTokenStartSessionActionArgs  extends KalturaRequestArgs {
    id : string;
	tokenHash : string;
	userId? : string;
	type? : KalturaSessionType;
	expiry? : number;
}

/** 
* Starts a new KS (kaltura Session) based on application authentication token id
**/
export class AppTokenStartSessionAction extends KalturaRequest<KalturaSessionInfo> {

    id : string;
	tokenHash : string;
	userId : string;
	type : KalturaSessionType;
	expiry : number;

    constructor(data : AppTokenStartSessionActionArgs)
    {
        super(data, 'o', 'KalturaSessionInfo');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'apptoken' },
				action : { type : 'c' , default : 'startSession' },
				id : { type : 's'  },
				tokenHash : { type : 's'  },
				userId : { type : 's'  },
				type : { type : 'en'  , subType : 'KalturaSessionType'},
				expiry : { type : 'n'  }
            }
        );
        return result;
    }
}

