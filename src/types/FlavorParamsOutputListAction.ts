
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFlavorParamsOutputListResponse } from './KalturaFlavorParamsOutputListResponse';

import { KalturaFlavorParamsOutputFilter } from './KalturaFlavorParamsOutputFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface FlavorParamsOutputListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaFlavorParamsOutputFilter;
	pager? : KalturaFilterPager;
}

/** 
* List flavor params output objects by filter and pager
**/
export class FlavorParamsOutputListAction extends KalturaRequest<KalturaFlavorParamsOutputListResponse> {

    filter : KalturaFlavorParamsOutputFilter;
	pager : KalturaFilterPager;

    constructor(data? : FlavorParamsOutputListActionArgs)
    {
        super(data, 'o', 'KalturaFlavorParamsOutputListResponse');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'flavorparamsoutput' },
				action : { type : 'c' , default : 'list' },
				filter : { type : 'o'  , subType : 'KalturaFlavorParamsOutputFilter'},
				pager : { type : 'o'  , subType : 'KalturaFilterPager'}
            }
        );
        return result;
    }
}

