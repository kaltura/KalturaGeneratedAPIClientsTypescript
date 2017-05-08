
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CaptionAssetServeActionArgs  extends KalturaRequestArgs {
    captionAssetId : string;
}

/** 
* Serves caption by its id
**/
export class CaptionAssetServeAction extends KalturaRequest<string> {

    captionAssetId : string;

    constructor(data : CaptionAssetServeActionArgs)
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
				action : { type : 'c', default : 'serve' },
				captionAssetId : { type : 's' }
            }
        );
        return result;
    }
}

