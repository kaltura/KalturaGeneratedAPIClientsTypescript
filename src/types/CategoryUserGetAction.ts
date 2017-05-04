
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCategoryUser } from './KalturaCategoryUser';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CategoryUserGetActionArgs  extends KalturaRequestArgs {
    categoryId : number;
	userId : string;
}

/** 
* Get CategoryUser by id
**/
export class CategoryUserGetAction extends KalturaRequest<KalturaCategoryUser> {

    categoryId : number;
	userId : string;

    constructor(data : CategoryUserGetActionArgs)
    {
        super(data, 'o', 'KalturaCategoryUser');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'categoryuser' },
				action : { type : 'c' , default : 'get' },
				categoryId : { type : 'n'  },
				userId : { type : 's'  }
            }
        );
        return result;
    }
}

