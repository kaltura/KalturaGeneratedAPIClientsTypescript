
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAccessControlProfile } from './KalturaAccessControlProfile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AccessControlProfileAddActionArgs  extends KalturaRequestArgs {
    accessControlProfile : KalturaAccessControlProfile;
}

/** 
* Add new access control profile
**/
export class AccessControlProfileAddAction extends KalturaRequest<KalturaAccessControlProfile> {

    accessControlProfile : KalturaAccessControlProfile;

    constructor(data : AccessControlProfileAddActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaAccessControlProfile', responseConstructor : KalturaAccessControlProfile  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'accesscontrolprofile'  },
				action : { type : 'c' , default : 'add'  },
				accessControlProfile : { type : 'o'   , fallbackConstructor :  KalturaAccessControlProfile, subType : 'KalturaAccessControlProfile'}
            }
        );
        return result;
    }
}

