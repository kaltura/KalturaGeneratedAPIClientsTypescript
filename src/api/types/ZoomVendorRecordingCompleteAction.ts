
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEndpointValidationResponse } from './KalturaEndpointValidationResponse';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ZoomVendorRecordingCompleteActionArgs  extends KalturaRequestArgs {
    
}

/**
 * Build request payload for service 'zoomVendor' action 'recordingComplete'.
 *
 * 
 *
 * Server response type:         KalturaEndpointValidationResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ZoomVendorRecordingCompleteAction extends KalturaRequest<KalturaEndpointValidationResponse> {

    

    constructor(data? : ZoomVendorRecordingCompleteActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaEndpointValidationResponse', responseConstructor : KalturaEndpointValidationResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'vendor_zoomvendor' },
				action : { type : 'c', default : 'recordingComplete' }
            }
        );
        return result;
    }
}

