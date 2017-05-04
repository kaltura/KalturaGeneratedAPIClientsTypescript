
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaResponseProfile } from './KalturaResponseProfile';

import { KalturaResponseProfileStatus } from './KalturaResponseProfileStatus';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ResponseProfileUpdateStatusActionArgs  extends KalturaRequestArgs {
    id : number;
	status : KalturaResponseProfileStatus;
}

/** 
* Update response profile status by id
**/
export class ResponseProfileUpdateStatusAction extends KalturaRequest<KalturaResponseProfile> {

    id : number;
	status : KalturaResponseProfileStatus;

    constructor(data : ResponseProfileUpdateStatusActionArgs)
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
				action : { type : 'c' , default : 'updateStatus' },
				id : { type : 'n'  },
				status : { type : 'en'  , subType : 'KalturaResponseProfileStatus'}
            }
        );
        return result;
    }
}

