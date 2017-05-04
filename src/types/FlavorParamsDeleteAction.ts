
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface FlavorParamsDeleteActionArgs  extends KalturaRequestArgs {
    id : number;
}

/** 
* Delete Flavor Params by ID
**/
export class FlavorParamsDeleteAction extends KalturaRequest<void> {

    id : number;

    constructor(data : FlavorParamsDeleteActionArgs)
    {
        super(data, 'v', '');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'flavorparams' },
				action : { type : 'c' , default : 'delete' },
				id : { type : 'n'  }
            }
        );
        return result;
    }
}

