
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAccessControlProfile } from './KalturaAccessControlProfile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AccessControlProfileUpdateActionArgs  extends KalturaRequestArgs {
    id : number;
	accessControlProfile : KalturaAccessControlProfile;
}

/** 
* Update access control profile by id
**/
export class AccessControlProfileUpdateAction extends KalturaRequest<KalturaAccessControlProfile> {

    id : number;
	accessControlProfile : KalturaAccessControlProfile;

    constructor(data : AccessControlProfileUpdateActionArgs)
    {
        super(data, 'o', 'KalturaAccessControlProfile');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'accesscontrolprofile' },
				action : { type : 'c' , default : 'update' },
				id : { type : 'n'  },
				accessControlProfile : { type : 'o'  , subType : 'KalturaAccessControlProfile'}
            }
        );
        return result;
    }
}

