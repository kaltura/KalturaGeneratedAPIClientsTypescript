
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ZoomVendorLocalRegistrationPageActionArgs  extends KalturaRequestArgs {
    zoomAccountId : string;
}

/**
 * Build request payload for service 'zoomVendor' action 'localRegistrationPage'.
 *
 * 
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ZoomVendorLocalRegistrationPageAction extends KalturaRequest<void> {

    zoomAccountId : string;

    constructor(data : ZoomVendorLocalRegistrationPageActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'vendor_zoomvendor' },
				action : { type : 'c', default : 'localRegistrationPage' },
				zoomAccountId : { type : 's' }
            }
        );
        return result;
    }
}

