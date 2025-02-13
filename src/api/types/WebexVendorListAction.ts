
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaWebexAPIIntegrationSettingResponse } from './KalturaWebexAPIIntegrationSettingResponse';

import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface WebexVendorListActionArgs  extends KalturaRequestArgs {
    pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'webexVendor' action 'list'.
 *
 * Usage: List KalturaWebexAPIIntegrationSetting objects
 *
 * Server response type:         KalturaWebexAPIIntegrationSettingResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class WebexVendorListAction extends KalturaRequest<KalturaWebexAPIIntegrationSettingResponse> {

    pager : KalturaFilterPager;

    constructor(data? : WebexVendorListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaWebexAPIIntegrationSettingResponse', responseConstructor : KalturaWebexAPIIntegrationSettingResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'webexapidropfolder_webexvendor' },
				action : { type : 'c', default : 'list' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

