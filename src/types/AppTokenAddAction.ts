
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAppToken } from './KalturaAppToken';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AppTokenAddActionArgs  extends KalturaRequestArgs {
    appToken : KalturaAppToken;
}

/** 
* Add new application authentication token
**/
export class AppTokenAddAction extends KalturaRequest<KalturaAppToken> {

    appToken : KalturaAppToken;

    constructor(data : AppTokenAddActionArgs)
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
				action : { type : 'c' , default : 'add' },
				appToken : { type : 'o'  , subType : 'KalturaAppToken'}
            }
        );
        return result;
    }
}

