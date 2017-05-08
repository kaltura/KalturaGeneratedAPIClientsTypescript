
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaThumbAsset } from './KalturaThumbAsset';

import { KalturaContentResource } from './KalturaContentResource';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ThumbAssetSetContentActionArgs  extends KalturaRequestArgs {
    id : string;
	contentResource : KalturaContentResource;
}

/** 
* Update content of thumbnail asset
**/
export class ThumbAssetSetContentAction extends KalturaRequest<KalturaThumbAsset> {

    id : string;
	contentResource : KalturaContentResource;

    constructor(data : ThumbAssetSetContentActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaThumbAsset', responseConstructor : KalturaThumbAsset  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'thumbasset'  },
				action : { type : 'c' , default : 'setContent'  },
				id : { type : 's'   },
				contentResource : { type : 'o'   , fallbackConstructor :  KalturaContentResource, subType : 'KalturaContentResource'}
            }
        );
        return result;
    }
}

