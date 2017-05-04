
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAccessControl } from './KalturaAccessControl';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AccessControlAddActionArgs  extends KalturaRequestArgs {
    accessControl : KalturaAccessControl;
}

/** 
* Add new Access Control Profile
**/
export class AccessControlAddAction extends KalturaRequest<KalturaAccessControl> {

    accessControl : KalturaAccessControl;

    constructor(data : AccessControlAddActionArgs)
    {
        super(data, 'o', 'KalturaAccessControl');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'accesscontrol' },
				action : { type : 'c' , default : 'add' },
				accessControl : { type : 'o'  , subType : 'KalturaAccessControl'}
            }
        );
        return result;
    }
}

