
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCategoryUser } from './KalturaCategoryUser';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CategoryUserAddActionArgs  extends KalturaRequestArgs {
    categoryUser : KalturaCategoryUser;
}

/** 
* Add new CategoryUser
**/
export class CategoryUserAddAction extends KalturaRequest<KalturaCategoryUser> {

    categoryUser : KalturaCategoryUser;

    constructor(data : CategoryUserAddActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaCategoryUser', responseConstructor : KalturaCategoryUser  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'categoryuser' },
				action : { type : 'c', default : 'add' },
				categoryUser : { type : 'o', subTypeConstructor : KalturaCategoryUser, subType : 'KalturaCategoryUser' }
            }
        );
        return result;
    }
}

