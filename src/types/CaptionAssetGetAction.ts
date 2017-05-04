
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCaptionAsset } from './KalturaCaptionAsset';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CaptionAssetGetActionArgs  extends KalturaRequestArgs {
    captionAssetId : string;
}


export class CaptionAssetGetAction extends KalturaRequest<KalturaCaptionAsset> {

    captionAssetId : string;

    constructor(data : CaptionAssetGetActionArgs)
    {
        super(data, 'o', 'KalturaCaptionAsset');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'caption_captionasset' },
				action : { type : 'c' , default : 'get' },
				captionAssetId : { type : 's'  }
            }
        );
        return result;
    }
}

