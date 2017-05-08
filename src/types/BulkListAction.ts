
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBulkUploadListResponse } from './KalturaBulkUploadListResponse';

import { KalturaBulkUploadFilter } from './KalturaBulkUploadFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface BulkListActionArgs  extends KalturaRequestArgs {
    bulkUploadFilter? : KalturaBulkUploadFilter;
	pager? : KalturaFilterPager;
}

/** 
* List bulk upload batch jobs
**/
export class BulkListAction extends KalturaRequest<KalturaBulkUploadListResponse> {

    bulkUploadFilter : KalturaBulkUploadFilter;
	pager : KalturaFilterPager;

    constructor(data? : BulkListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaBulkUploadListResponse', responseConstructor : KalturaBulkUploadListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'bulkupload_bulk'  },
				action : { type : 'c' , default : 'list'  },
				bulkUploadFilter : { type : 'o'   , fallbackConstructor :  KalturaBulkUploadFilter, subType : 'KalturaBulkUploadFilter'},
				pager : { type : 'o'   , fallbackConstructor :  KalturaFilterPager, subType : 'KalturaFilterPager'}
            }
        );
        return result;
    }
}

