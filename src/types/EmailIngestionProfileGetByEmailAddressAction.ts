
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEmailIngestionProfile } from './KalturaEmailIngestionProfile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface EmailIngestionProfileGetByEmailAddressActionArgs  extends KalturaRequestArgs {
    emailAddress : string;
}

/** 
* Retrieve a EmailIngestionProfile by email address
**/
export class EmailIngestionProfileGetByEmailAddressAction extends KalturaRequest<KalturaEmailIngestionProfile> {

    emailAddress : string;

    constructor(data : EmailIngestionProfileGetByEmailAddressActionArgs)
    {
        super(data, 'o', 'KalturaEmailIngestionProfile');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'emailingestionprofile' },
				action : { type : 'c' , default : 'getByEmailAddress' },
				emailAddress : { type : 's'  }
            }
        );
        return result;
    }
}

