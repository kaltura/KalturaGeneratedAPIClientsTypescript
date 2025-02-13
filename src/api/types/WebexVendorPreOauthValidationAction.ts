
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface WebexVendorPreOauthValidationActionArgs  extends KalturaRequestArgs {
    
}

/**
 * Build request payload for service 'webexVendor' action 'preOauthValidation'.
 *
 * 
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class WebexVendorPreOauthValidationAction extends KalturaRequest<void> {

    

    constructor(data? : WebexVendorPreOauthValidationActionArgs)
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
				action : { type : 'c', default : 'preOauthValidation' }
            }
        );
        return result;
    }
}

