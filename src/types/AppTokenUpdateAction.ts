
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAppToken } from './KalturaAppToken';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AppTokenUpdateActionArgs  extends KalturaRequestArgs {
    id : string;
	appToken : KalturaAppToken;
}

/** 
* Update application authentication token by id
**/
export class AppTokenUpdateAction extends KalturaRequest<KalturaAppToken> {

    id : string;
	appToken : KalturaAppToken;

    constructor(data : AppTokenUpdateActionArgs)
    {
        super(data, 'o', 'KalturaAppToken');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'apptoken' },
				action : { type : 'c' , default : 'update' },
				id : { type : 's'  },
				appToken : { type : 'o'  , subType : 'KalturaAppToken'}
            }
        );
        return result;
    }
}

