
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaFilterPagerArgs  extends KalturaObjectBaseArgs {
    pageSize? : number;
	pageIndex? : number;
}

/** 
* The KalturaFilterPager object enables paging management to be applied upon
* service list actions.
**/
export class KalturaFilterPager extends KalturaObjectBase {

    pageSize : number;
	pageIndex : number;

    constructor(data? : KalturaFilterPagerArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c' , default : 'KalturaFilterPager' },
				pageSize : { type : 'n'  },
				pageIndex : { type : 'n'  }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaFilterPager',KalturaFilterPager);
