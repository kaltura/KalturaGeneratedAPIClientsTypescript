
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBulkUpload } from './KalturaBulkUpload';

import { KalturaBulkUploadJobData } from './KalturaBulkUploadJobData';
import { KalturaBulkUploadUserData } from './KalturaBulkUploadUserData';
import { KalturaUploadRequest, KalturaUploadRequestArgs } from '../kaltura-upload-request';

export interface UserAddFromBulkUploadActionArgs  extends KalturaUploadRequestArgs {
    fileData : File;
	bulkUploadData? : KalturaBulkUploadJobData;
	bulkUploadUserData? : KalturaBulkUploadUserData;
}


export class UserAddFromBulkUploadAction extends KalturaUploadRequest<KalturaBulkUpload> {

    fileData : File;
	bulkUploadData : KalturaBulkUploadJobData;
	bulkUploadUserData : KalturaBulkUploadUserData;

    constructor(data : UserAddFromBulkUploadActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaBulkUpload', responseConstructor : KalturaBulkUpload  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'user'  },
				action : { type : 'c' , default : 'addFromBulkUpload'  },
				fileData : { type : 'f'   },
				bulkUploadData : { type : 'o'   , fallbackConstructor :  KalturaBulkUploadJobData, subType : 'KalturaBulkUploadJobData'},
				bulkUploadUserData : { type : 'o'   , fallbackConstructor :  KalturaBulkUploadUserData, subType : 'KalturaBulkUploadUserData'}
            }
        );
        return result;
    }
}

