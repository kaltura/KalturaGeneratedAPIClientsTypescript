
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBulkUpload } from './KalturaBulkUpload';

import { KalturaBulkUploadJobData } from './KalturaBulkUploadJobData';
import { KalturaBulkUploadCategoryUserData } from './KalturaBulkUploadCategoryUserData';
import { KalturaUploadRequest, KalturaUploadRequestArgs } from '../kaltura-upload-request';

export interface CategoryUserAddFromBulkUploadActionArgs  extends KalturaUploadRequestArgs {
    fileData : File;
	bulkUploadData? : KalturaBulkUploadJobData;
	bulkUploadCategoryUserData? : KalturaBulkUploadCategoryUserData;
}


export class CategoryUserAddFromBulkUploadAction extends KalturaUploadRequest<KalturaBulkUpload> {

    fileData : File;
	bulkUploadData : KalturaBulkUploadJobData;
	bulkUploadCategoryUserData : KalturaBulkUploadCategoryUserData;

    constructor(data : CategoryUserAddFromBulkUploadActionArgs)
    {
        super(data, 'o', 'KalturaBulkUpload');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'categoryuser' },
				action : { type : 'c' , default : 'addFromBulkUpload' },
				fileData : { type : 'f'  },
				bulkUploadData : { type : 'o'  , subType : 'KalturaBulkUploadJobData'},
				bulkUploadCategoryUserData : { type : 'o'  , subType : 'KalturaBulkUploadCategoryUserData'}
            }
        );
        return result;
    }
}

