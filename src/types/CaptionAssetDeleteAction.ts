
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CaptionAssetDeleteActionArgs  extends KalturaRequestArgs {
    captionAssetId : string;
}


export class CaptionAssetDeleteAction extends KalturaRequest<void> {

    captionAssetId : string;

    constructor(data : CaptionAssetDeleteActionArgs)
    {
        super(data, 'v', '');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'caption_captionasset' },
				action : { type : 'c' , default : 'delete' },
				captionAssetId : { type : 's'  }
            }
        );
        return result;
    }
}

