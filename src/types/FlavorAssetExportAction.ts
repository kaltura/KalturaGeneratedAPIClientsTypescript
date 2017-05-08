
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFlavorAsset } from './KalturaFlavorAsset';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface FlavorAssetExportActionArgs  extends KalturaRequestArgs {
    assetId : string;
	storageProfileId : number;
}

/** 
* manually export an asset
**/
export class FlavorAssetExportAction extends KalturaRequest<KalturaFlavorAsset> {

    assetId : string;
	storageProfileId : number;

    constructor(data : FlavorAssetExportActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaFlavorAsset', responseConstructor : KalturaFlavorAsset  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'flavorasset'  },
				action : { type : 'c' , default : 'export'  },
				assetId : { type : 's'   },
				storageProfileId : { type : 'n'   }
            }
        );
        return result;
    }
}

