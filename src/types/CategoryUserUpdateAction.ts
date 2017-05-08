
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCategoryUser } from './KalturaCategoryUser';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CategoryUserUpdateActionArgs  extends KalturaRequestArgs {
    categoryId : number;
	userId : string;
	categoryUser : KalturaCategoryUser;
	override? : boolean;
}

/** 
* Update CategoryUser by id
**/
export class CategoryUserUpdateAction extends KalturaRequest<KalturaCategoryUser> {

    categoryId : number;
	userId : string;
	categoryUser : KalturaCategoryUser;
	override : boolean;

    constructor(data : CategoryUserUpdateActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaCategoryUser', responseConstructor : KalturaCategoryUser  });
        if (typeof this.override === 'undefined') this.override = false;
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'categoryuser'  },
				action : { type : 'c' , default : 'update'  },
				categoryId : { type : 'n'   },
				userId : { type : 's'   },
				categoryUser : { type : 'o'   , fallbackConstructor :  KalturaCategoryUser, subType : 'KalturaCategoryUser'},
				override : { type : 'b'   }
            }
        );
        return result;
    }
}

