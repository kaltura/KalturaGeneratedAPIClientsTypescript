
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCategoryUser } from './KalturaCategoryUser';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CategoryUserActivateActionArgs  extends KalturaRequestArgs {
    categoryId : number;
	userId : string;
}

/** 
* activate CategoryUser
**/
export class CategoryUserActivateAction extends KalturaRequest<KalturaCategoryUser> {

    categoryId : number;
	userId : string;

    constructor(data : CategoryUserActivateActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaCategoryUser', responseConstructor : KalturaCategoryUser  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'categoryuser'  },
				action : { type : 'c' , default : 'activate'  },
				categoryId : { type : 'n'   },
				userId : { type : 's'   }
            }
        );
        return result;
    }
}

