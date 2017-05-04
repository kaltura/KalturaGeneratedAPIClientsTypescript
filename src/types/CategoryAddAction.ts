
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCategory } from './KalturaCategory';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CategoryAddActionArgs  extends KalturaRequestArgs {
    category : KalturaCategory;
}

/** 
* Add new Category
**/
export class CategoryAddAction extends KalturaRequest<KalturaCategory> {

    category : KalturaCategory;

    constructor(data : CategoryAddActionArgs)
    {
        super(data, 'o', 'KalturaCategory');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'category' },
				action : { type : 'c' , default : 'add' },
				category : { type : 'o'  , subType : 'KalturaCategory'}
            }
        );
        return result;
    }
}

