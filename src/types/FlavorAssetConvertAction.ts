
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface FlavorAssetConvertActionArgs  extends KalturaRequestArgs {
    entryId : string;
	flavorParamsId : number;
	priority? : number;
}

/** 
* Add and convert new Flavor Asset for Entry with specific Flavor Params
**/
export class FlavorAssetConvertAction extends KalturaRequest<void> {

    entryId : string;
	flavorParamsId : number;
	priority : number;

    constructor(data : FlavorAssetConvertActionArgs)
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
				action : { type : 'c' , default : 'convert' },
				entryId : { type : 's'  },
				flavorParamsId : { type : 'n'  },
				priority : { type : 'n'  }
            }
        );
        return result;
    }
}

