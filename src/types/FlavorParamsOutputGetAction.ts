
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFlavorParamsOutput } from './KalturaFlavorParamsOutput';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface FlavorParamsOutputGetActionArgs  extends KalturaRequestArgs {
    id : number;
}

/** 
* Get flavor params output object by ID
**/
export class FlavorParamsOutputGetAction extends KalturaRequest<KalturaFlavorParamsOutput> {

    id : number;

    constructor(data : FlavorParamsOutputGetActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaFlavorParamsOutput', responseConstructor : KalturaFlavorParamsOutput  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'flavorparamsoutput'  },
				action : { type : 'c' , default : 'get'  },
				id : { type : 'n'   }
            }
        );
        return result;
    }
}

