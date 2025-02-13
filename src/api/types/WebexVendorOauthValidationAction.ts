
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface WebexVendorOauthValidationActionArgs  extends KalturaRequestArgs {
    
}

/**
 * Build request payload for service 'webexVendor' action 'oauthValidation'.
 *
 * 
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class WebexVendorOauthValidationAction extends KalturaRequest<string> {

    

    constructor(data? : WebexVendorOauthValidationActionArgs)
    {
        super(data, {responseType : 's', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'webexapidropfolder_webexvendor' },
				action : { type : 'c', default : 'oauthValidation' }
            }
        );
        return result;
    }
}

