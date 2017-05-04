
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaResponseProfile } from './KalturaResponseProfile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ResponseProfileGetActionArgs  extends KalturaRequestArgs {
    id : number;
}

/** 
* Get response profile by id
**/
export class ResponseProfileGetAction extends KalturaRequest<KalturaResponseProfile> {

    id : number;

    constructor(data : ResponseProfileGetActionArgs)
    {
        super(data, 'o', 'KalturaResponseProfile');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'responseprofile' },
				action : { type : 'c' , default : 'get' },
				id : { type : 'n'  }
            }
        );
        return result;
    }
}

