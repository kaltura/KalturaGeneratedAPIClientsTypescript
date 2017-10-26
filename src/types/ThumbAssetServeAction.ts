
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaThumbParams } from './KalturaThumbParams';
import { KalturaThumbnailServeOptions } from './KalturaThumbnailServeOptions';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ThumbAssetServeActionArgs  extends KalturaRequestArgs {
    thumbAssetId : string;
	version? : number;
	thumbParams? : KalturaThumbParams;
	options? : KalturaThumbnailServeOptions;
}

/**
 * Build request payload for service 'thumbAsset' action 'serve'.
 *
 * Usage: Serves thumbnail by its id
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ThumbAssetServeAction extends KalturaRequest<string> {

    thumbAssetId : string;
	version : number;
	thumbParams : KalturaThumbParams;
	options : KalturaThumbnailServeOptions;

    constructor(data : ThumbAssetServeActionArgs)
    {
        super(data, {responseType : 'f', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'thumbasset' },
				action : { type : 'c', default : 'serve' },
				thumbAssetId : { type : 's' },
				version : { type : 'n' },
				thumbParams : { type : 'o', subTypeConstructor : KalturaThumbParams, subType : 'KalturaThumbParams' },
				options : { type : 'o', subTypeConstructor : KalturaThumbnailServeOptions, subType : 'KalturaThumbnailServeOptions' }
            }
        );
        return result;
    }
}

