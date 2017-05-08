
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBulkUpload } from './KalturaBulkUpload';

import { KalturaBulkUploadJobData } from './KalturaBulkUploadJobData';
import { KalturaBulkUploadCategoryData } from './KalturaBulkUploadCategoryData';
import { KalturaUploadRequest, KalturaUploadRequestArgs } from '../kaltura-upload-request';

export interface CategoryAddFromBulkUploadActionArgs  extends KalturaUploadRequestArgs {
    fileData : File;
	bulkUploadData? : KalturaBulkUploadJobData;
	bulkUploadCategoryData? : KalturaBulkUploadCategoryData;
}


export class CategoryAddFromBulkUploadAction extends KalturaUploadRequest<KalturaBulkUpload> {

    fileData : File;
	bulkUploadData : KalturaBulkUploadJobData;
	bulkUploadCategoryData : KalturaBulkUploadCategoryData;

    constructor(data : CategoryAddFromBulkUploadActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaBulkUpload', responseConstructor : KalturaBulkUpload  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'category'  },
				action : { type : 'c' , default : 'addFromBulkUpload'  },
				fileData : { type : 'f'   },
				bulkUploadData : { type : 'o'   , fallbackConstructor :  KalturaBulkUploadJobData, subType : 'KalturaBulkUploadJobData'},
				bulkUploadCategoryData : { type : 'o'   , fallbackConstructor :  KalturaBulkUploadCategoryData, subType : 'KalturaBulkUploadCategoryData'}
            }
        );
        return result;
    }
}

