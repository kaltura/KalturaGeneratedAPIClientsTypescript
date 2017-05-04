
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaResponseProfile } from './KalturaResponseProfile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ResponseProfileUpdateActionArgs  extends KalturaRequestArgs {
    id : number;
	updateResponseProfile : KalturaResponseProfile;
}

/** 
* Update response profile by id
**/
export class ResponseProfileUpdateAction extends KalturaRequest<KalturaResponseProfile> {

    id : number;
	updateResponseProfile : KalturaResponseProfile;

    constructor(data : ResponseProfileUpdateActionArgs)
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
				action : { type : 'c' , default : 'update' },
				id : { type : 'n'  },
				updateResponseProfile : { type : 'o'  , subType : 'KalturaResponseProfile'}
            }
        );
        return result;
    }
}

