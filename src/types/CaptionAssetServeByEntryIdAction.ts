
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CaptionAssetServeByEntryIdActionArgs  extends KalturaRequestArgs {
    entryId : string;
	captionParamId? : number;
}

/**
 * Build request payload for service 'captionAsset' action 'serveByEntryId'.
 *
 * Usage: Serves caption by entry id and thumnail params id
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class CaptionAssetServeByEntryIdAction extends KalturaRequest<string> {

    entryId : string;
	captionParamId : number;

    constructor(data : CaptionAssetServeByEntryIdActionArgs)
    {
        super(data, {responseType : 'f', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'caption_captionasset' },
				action : { type : 'c', default : 'serveByEntryId' },
				entryId : { type : 's' },
				captionParamId : { type : 'n' }
            }
        );
        return result;
    }
}

