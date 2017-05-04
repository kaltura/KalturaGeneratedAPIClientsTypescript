
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AccessControlProfileDeleteActionArgs  extends KalturaRequestArgs {
    id : number;
}

/** 
* Delete access control profile by id
**/
export class AccessControlProfileDeleteAction extends KalturaRequest<void> {

    id : number;

    constructor(data : AccessControlProfileDeleteActionArgs)
    {
        super(data, 'v', '');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'accesscontrolprofile' },
				action : { type : 'c' , default : 'delete' },
				id : { type : 'n'  }
            }
        );
        return result;
    }
}

