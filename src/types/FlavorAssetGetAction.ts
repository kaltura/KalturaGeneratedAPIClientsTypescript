
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFlavorAsset } from './KalturaFlavorAsset';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface FlavorAssetGetActionArgs  extends KalturaRequestArgs {
    id : string;
}

/** 
* Get Flavor Asset by ID
**/
export class FlavorAssetGetAction extends KalturaRequest<KalturaFlavorAsset> {

    id : string;

    constructor(data : FlavorAssetGetActionArgs)
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
				action : { type : 'c' , default : 'get'  },
				id : { type : 's'   }
            }
        );
        return result;
    }
}

