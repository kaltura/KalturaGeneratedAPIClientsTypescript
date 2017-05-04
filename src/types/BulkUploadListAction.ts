
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBulkUploadListResponse } from './KalturaBulkUploadListResponse';

import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface BulkUploadListActionArgs  extends KalturaRequestArgs {
    pager? : KalturaFilterPager;
}

/** 
* List bulk upload batch jobs
**/
export class BulkUploadListAction extends KalturaRequest<KalturaBulkUploadListResponse> {

    pager : KalturaFilterPager;

    constructor(data? : BulkUploadListActionArgs)
    {
        super(data, 'o', 'KalturaBulkUploadListResponse');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'bulkupload' },
				action : { type : 'c' , default : 'list' },
				pager : { type : 'o'  , subType : 'KalturaFilterPager'}
            }
        );
        return result;
    }
}

