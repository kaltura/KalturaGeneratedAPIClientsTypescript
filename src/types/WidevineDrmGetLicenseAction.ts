
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface WidevineDrmGetLicenseActionArgs  extends KalturaRequestArgs {
    flavorAssetId : string;
	referrer? : string;
}

/** 
* Get license for encrypted content playback
**/
export class WidevineDrmGetLicenseAction extends KalturaRequest<string> {

    flavorAssetId : string;
	referrer : string;

    constructor(data : WidevineDrmGetLicenseActionArgs)
    {
        super(data, {responseType : 's', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'widevine_widevinedrm' },
				action : { type : 'c', default : 'getLicense' },
				flavorAssetId : { type : 's' },
				referrer : { type : 's' }
            }
        );
        return result;
    }
}

