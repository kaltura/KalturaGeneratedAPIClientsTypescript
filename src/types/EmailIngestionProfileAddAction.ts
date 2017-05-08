
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEmailIngestionProfile } from './KalturaEmailIngestionProfile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface EmailIngestionProfileAddActionArgs  extends KalturaRequestArgs {
    EmailIP : KalturaEmailIngestionProfile;
}

/** 
* EmailIngestionProfile Add action allows you to add a EmailIngestionProfile to
* Kaltura DB
**/
export class EmailIngestionProfileAddAction extends KalturaRequest<KalturaEmailIngestionProfile> {

    EmailIP : KalturaEmailIngestionProfile;

    constructor(data : EmailIngestionProfileAddActionArgs)
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
				action : { type : 'c', default : 'add' },
				EmailIP : { type : 'o', subTypeConstructor : KalturaEmailIngestionProfile, subType : 'KalturaEmailIngestionProfile' }
            }
        );
        return result;
    }
}

