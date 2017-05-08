
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaConversionProfileAssetParamsListResponse } from './KalturaConversionProfileAssetParamsListResponse';

import { KalturaConversionProfileAssetParamsFilter } from './KalturaConversionProfileAssetParamsFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ConversionProfileAssetParamsListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaConversionProfileAssetParamsFilter;
	pager? : KalturaFilterPager;
}

/** 
* Lists asset parmas of conversion profile by ID
**/
export class ConversionProfileAssetParamsListAction extends KalturaRequest<KalturaConversionProfileAssetParamsListResponse> {

    filter : KalturaConversionProfileAssetParamsFilter;
	pager : KalturaFilterPager;

    constructor(data? : ConversionProfileAssetParamsListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaConversionProfileAssetParamsListResponse', responseConstructor : KalturaConversionProfileAssetParamsListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'conversionprofileassetparams'  },
				action : { type : 'c' , default : 'list'  },
				filter : { type : 'o'   , fallbackConstructor :  KalturaConversionProfileAssetParamsFilter, subType : 'KalturaConversionProfileAssetParamsFilter'},
				pager : { type : 'o'   , fallbackConstructor :  KalturaFilterPager, subType : 'KalturaFilterPager'}
            }
        );
        return result;
    }
}

