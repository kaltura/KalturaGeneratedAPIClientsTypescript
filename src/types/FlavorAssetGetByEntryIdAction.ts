
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFlavorAsset } from './KalturaFlavorAsset';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface FlavorAssetGetByEntryIdActionArgs  extends KalturaRequestArgs {
    entryId : string;
}

/** 
* Get Flavor Assets for Entry
**/
export class FlavorAssetGetByEntryIdAction extends KalturaRequest<KalturaFlavorAsset[]> {

    entryId : string;

    constructor(data : FlavorAssetGetByEntryIdActionArgs)
    {
        super(data, 'a', 'KalturaFlavorAsset');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'flavorasset' },
				action : { type : 'c' , default : 'getByEntryId' },
				entryId : { type : 's'  }
            }
        );
        return result;
    }
}

