
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPlayReadyLicenseDetails } from './KalturaPlayReadyLicenseDetails';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PlayReadyDrmGetLicenseDetailsActionArgs  extends KalturaRequestArgs {
    keyId : string;
	deviceId : string;
	deviceType : number;
	entryId? : string;
	referrer? : string;
}

/** 
* Get Play Ready policy and dates for license creation
**/
export class PlayReadyDrmGetLicenseDetailsAction extends KalturaRequest<KalturaPlayReadyLicenseDetails> {

    keyId : string;
	deviceId : string;
	deviceType : number;
	entryId : string;
	referrer : string;

    constructor(data : PlayReadyDrmGetLicenseDetailsActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaPlayReadyLicenseDetails', responseConstructor : KalturaPlayReadyLicenseDetails  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'playready_playreadydrm' },
				action : { type : 'c', default : 'getLicenseDetails' },
				keyId : { type : 's' },
				deviceId : { type : 's' },
				deviceType : { type : 'n' },
				entryId : { type : 's' },
				referrer : { type : 's' }
            }
        );
        return result;
    }
}

