
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaWebexAPIIntegrationSetting } from './KalturaWebexAPIIntegrationSetting';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface WebexVendorSubmitRegistrationActionArgs  extends KalturaRequestArgs {
    accountId : string;
	integrationSetting : KalturaWebexAPIIntegrationSetting;
}

/**
 * Build request payload for service 'webexVendor' action 'submitRegistration'.
 *
 * 
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class WebexVendorSubmitRegistrationAction extends KalturaRequest<string> {

    accountId : string;
	integrationSetting : KalturaWebexAPIIntegrationSetting;

    constructor(data : WebexVendorSubmitRegistrationActionArgs)
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
				action : { type : 'c', default : 'submitRegistration' },
				accountId : { type : 's' },
				integrationSetting : { type : 'o', subTypeConstructor : KalturaWebexAPIIntegrationSetting, subType : 'KalturaWebexAPIIntegrationSetting' }
            }
        );
        return result;
    }
}

