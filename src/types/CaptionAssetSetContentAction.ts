
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCaptionAsset } from './KalturaCaptionAsset';

import { KalturaContentResource } from './KalturaContentResource';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CaptionAssetSetContentActionArgs  extends KalturaRequestArgs {
    id : string;
	contentResource : KalturaContentResource;
}

/** 
* Update content of caption asset
**/
export class CaptionAssetSetContentAction extends KalturaRequest<KalturaCaptionAsset> {

    id : string;
	contentResource : KalturaContentResource;

    constructor(data : CaptionAssetSetContentActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaCaptionAsset', responseConstructor : KalturaCaptionAsset  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'caption_captionasset'  },
				action : { type : 'c' , default : 'setContent'  },
				id : { type : 's'   },
				contentResource : { type : 'o'   , fallbackConstructor :  KalturaContentResource, subType : 'KalturaContentResource'}
            }
        );
        return result;
    }
}

