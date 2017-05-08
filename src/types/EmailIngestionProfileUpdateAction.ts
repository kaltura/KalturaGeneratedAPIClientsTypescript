
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEmailIngestionProfile } from './KalturaEmailIngestionProfile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface EmailIngestionProfileUpdateActionArgs  extends KalturaRequestArgs {
    id : number;
	EmailIP : KalturaEmailIngestionProfile;
}

/** 
* Update an existing EmailIngestionProfile
**/
export class EmailIngestionProfileUpdateAction extends KalturaRequest<KalturaEmailIngestionProfile> {

    id : number;
	EmailIP : KalturaEmailIngestionProfile;

    constructor(data : EmailIngestionProfileUpdateActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaEmailIngestionProfile', responseConstructor : KalturaEmailIngestionProfile  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'emailingestionprofile' },
				action : { type : 'c', default : 'update' },
				id : { type : 'n' },
				EmailIP : { type : 'o', subTypeConstructor : KalturaEmailIngestionProfile, subType : 'KalturaEmailIngestionProfile' }
            }
        );
        return result;
    }
}

