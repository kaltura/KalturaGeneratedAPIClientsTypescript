
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CategoryUnlockCategoriesActionArgs  extends KalturaRequestArgs {
    
}

/** 
* Unlock categories
**/
export class CategoryUnlockCategoriesAction extends KalturaRequest<void> {

    

    constructor(data? : CategoryUnlockCategoriesActionArgs)
    {
        super(data, 'v', '');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'category' },
				action : { type : 'c' , default : 'unlockCategories' }
            }
        );
        return result;
    }
}

