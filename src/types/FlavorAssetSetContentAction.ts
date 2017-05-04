
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFlavorAsset } from './KalturaFlavorAsset';

import { KalturaContentResource } from './KalturaContentResource';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface FlavorAssetSetContentActionArgs  extends KalturaRequestArgs {
    id : string;
	contentResource : KalturaContentResource;
}

/** 
* Update content of flavor asset
**/
export class FlavorAssetSetContentAction extends KalturaRequest<KalturaFlavorAsset> {

    id : string;
	contentResource : KalturaContentResource;

    constructor(data : FlavorAssetSetContentActionArgs)
    {
        super(data, 'o', 'KalturaFlavorAsset');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'flavorasset' },
				action : { type : 'c' , default : 'setContent' },
				id : { type : 's'  },
				contentResource : { type : 'o'  , subType : 'KalturaContentResource'}
            }
        );
        return result;
    }
}

