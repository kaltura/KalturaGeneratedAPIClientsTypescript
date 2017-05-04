
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaThumbAsset } from './KalturaThumbAsset';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ThumbAssetUpdateActionArgs  extends KalturaRequestArgs {
    id : string;
	thumbAsset : KalturaThumbAsset;
}

/** 
* Update thumbnail asset
**/
export class ThumbAssetUpdateAction extends KalturaRequest<KalturaThumbAsset> {

    id : string;
	thumbAsset : KalturaThumbAsset;

    constructor(data : ThumbAssetUpdateActionArgs)
    {
        super(data, 'o', 'KalturaThumbAsset');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'thumbasset' },
				action : { type : 'c' , default : 'update' },
				id : { type : 's'  },
				thumbAsset : { type : 'o'  , subType : 'KalturaThumbAsset'}
            }
        );
        return result;
    }
}

