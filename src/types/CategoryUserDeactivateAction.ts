
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCategoryUser } from './KalturaCategoryUser';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CategoryUserDeactivateActionArgs  extends KalturaRequestArgs {
    categoryId : number;
	userId : string;
}

/** 
* reject CategoryUser
**/
export class CategoryUserDeactivateAction extends KalturaRequest<KalturaCategoryUser> {

    categoryId : number;
	userId : string;

    constructor(data : CategoryUserDeactivateActionArgs)
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
				action : { type : 'c' , default : 'deactivate' },
				categoryId : { type : 'n'  },
				userId : { type : 's'  }
            }
        );
        return result;
    }
}

