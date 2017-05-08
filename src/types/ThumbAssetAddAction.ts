
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaThumbAsset } from './KalturaThumbAsset';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ThumbAssetAddActionArgs  extends KalturaRequestArgs {
    entryId : string;
	thumbAsset : KalturaThumbAsset;
}

/** 
* Add thumbnail asset
**/
export class ThumbAssetAddAction extends KalturaRequest<KalturaThumbAsset> {

    entryId : string;
	thumbAsset : KalturaThumbAsset;

    constructor(data : ThumbAssetAddActionArgs)
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
				action : { type : 'c' , default : 'add'  },
				entryId : { type : 's'   },
				thumbAsset : { type : 'o'   , fallbackConstructor :  KalturaThumbAsset, subType : 'KalturaThumbAsset'}
            }
        );
        return result;
    }
}

