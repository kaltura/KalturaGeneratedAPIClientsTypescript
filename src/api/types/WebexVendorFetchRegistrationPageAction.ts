
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface WebexVendorFetchRegistrationPageActionArgs  extends KalturaRequestArgs {
    tokensData : string;
	iv : string;
}

/**
 * Build request payload for service 'webexVendor' action 'fetchRegistrationPage'.
 *
 * 
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class WebexVendorFetchRegistrationPageAction extends KalturaRequest<void> {

    tokensData : string;
	iv : string;

    constructor(data : WebexVendorFetchRegistrationPageActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'webexapidropfolder_webexvendor' },
				action : { type : 'c', default : 'fetchRegistrationPage' },
				tokensData : { type : 's' },
				iv : { type : 's' }
            }
        );
        return result;
    }
}

