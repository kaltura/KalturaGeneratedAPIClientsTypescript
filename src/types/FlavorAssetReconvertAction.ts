
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface FlavorAssetReconvertActionArgs  extends KalturaRequestArgs {
    id : string;
}

/** 
* Reconvert Flavor Asset by ID
**/
export class FlavorAssetReconvertAction extends KalturaRequest<void> {

    id : string;

    constructor(data : FlavorAssetReconvertActionArgs)
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
				action : { type : 'c' , default : 'reconvert' },
				id : { type : 's'  }
            }
        );
        return result;
    }
}

