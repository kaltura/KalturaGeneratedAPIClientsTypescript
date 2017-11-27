
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface FlavorAssetGetVolumeMapActionArgs  extends KalturaRequestArgs {
    flavorId : string;
}

/**
 * Build request payload for service 'flavorAsset' action 'getVolumeMap'.
 *
 * Usage: Get volume map by entry id
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class FlavorAssetGetVolumeMapAction extends KalturaRequest<string> {

    flavorId : string;

    constructor(data : FlavorAssetGetVolumeMapActionArgs)
    {
        super(data, {responseType : 'f', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'flavorasset' },
				action : { type : 'c', default : 'getVolumeMap' },
				flavorId : { type : 's' }
            }
        );
        return result;
    }
}

