
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CategoryIndexActionArgs  extends KalturaRequestArgs {
    id : number;
	shouldUpdate? : boolean;
}

/** 
* Index Category by id
**/
export class CategoryIndexAction extends KalturaRequest<number> {

    id : number;
	shouldUpdate : boolean;

    constructor(data : CategoryIndexActionArgs)
    {
        super(data, 'n', '');
        if (typeof this.shouldUpdate === 'undefined') this.shouldUpdate = true;
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'category' },
				action : { type : 'c' , default : 'index' },
				id : { type : 'n'  },
				shouldUpdate : { type : 'b'  }
            }
        );
        return result;
    }
}

