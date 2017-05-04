
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCaptionAsset } from './KalturaCaptionAsset';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CaptionAssetAddActionArgs  extends KalturaRequestArgs {
    entryId : string;
	captionAsset : KalturaCaptionAsset;
}

/** 
* Add caption asset
**/
export class CaptionAssetAddAction extends KalturaRequest<KalturaCaptionAsset> {

    entryId : string;
	captionAsset : KalturaCaptionAsset;

    constructor(data : CaptionAssetAddActionArgs)
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
				action : { type : 'c' , default : 'add' },
				entryId : { type : 's'  },
				captionAsset : { type : 'o'  , subType : 'KalturaCaptionAsset'}
            }
        );
        return result;
    }
}

