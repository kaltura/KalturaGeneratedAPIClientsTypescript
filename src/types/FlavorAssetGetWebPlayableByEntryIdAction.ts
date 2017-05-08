
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFlavorAsset } from './KalturaFlavorAsset';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface FlavorAssetGetWebPlayableByEntryIdActionArgs  extends KalturaRequestArgs {
    entryId : string;
}

/** 
* Get web playable Flavor Assets for Entry
**/
export class FlavorAssetGetWebPlayableByEntryIdAction extends KalturaRequest<KalturaFlavorAsset[]> {

    entryId : string;

    constructor(data : FlavorAssetGetWebPlayableByEntryIdActionArgs)
    {
        super(data, {responseType : 'a', responseSubType : 'KalturaFlavorAsset', responseConstructor : KalturaFlavorAsset  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'flavorasset'  },
				action : { type : 'c' , default : 'getWebPlayableByEntryId'  },
				entryId : { type : 's'   }
            }
        );
        return result;
    }
}

