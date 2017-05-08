
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaThumbParamsOutputListResponse } from './KalturaThumbParamsOutputListResponse';

import { KalturaThumbParamsOutputFilter } from './KalturaThumbParamsOutputFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ThumbParamsOutputListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaThumbParamsOutputFilter;
	pager? : KalturaFilterPager;
}

/** 
* List thumb params output objects by filter and pager
**/
export class ThumbParamsOutputListAction extends KalturaRequest<KalturaThumbParamsOutputListResponse> {

    filter : KalturaThumbParamsOutputFilter;
	pager : KalturaFilterPager;

    constructor(data? : ThumbParamsOutputListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaThumbParamsOutputListResponse', responseConstructor : KalturaThumbParamsOutputListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'thumbparamsoutput'  },
				action : { type : 'c' , default : 'list'  },
				filter : { type : 'o'   , fallbackConstructor :  KalturaThumbParamsOutputFilter, subType : 'KalturaThumbParamsOutputFilter'},
				pager : { type : 'o'   , fallbackConstructor :  KalturaFilterPager, subType : 'KalturaFilterPager'}
            }
        );
        return result;
    }
}

