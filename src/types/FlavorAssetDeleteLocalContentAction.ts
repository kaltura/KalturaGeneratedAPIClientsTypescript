
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface FlavorAssetDeleteLocalContentActionArgs  extends KalturaRequestArgs {
    assetId : string;
}

/** 
* delete all local file syncs for this asset
**/
export class FlavorAssetDeleteLocalContentAction extends KalturaRequest<void> {

    assetId : string;

    constructor(data : FlavorAssetDeleteLocalContentActionArgs)
    {
        super(data, 'v', '');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'flavorasset' },
				action : { type : 'c' , default : 'deleteLocalContent' },
				assetId : { type : 's'  }
            }
        );
        return result;
    }
}

