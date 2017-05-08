
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBulkUpload } from './KalturaBulkUpload';

import { KalturaBulkUploadJobData } from './KalturaBulkUploadJobData';
import { KalturaBulkUploadEntryData } from './KalturaBulkUploadEntryData';
import { KalturaUploadRequest, KalturaUploadRequestArgs } from '../kaltura-upload-request';

export interface MediaBulkUploadAddActionArgs  extends KalturaUploadRequestArgs {
    fileData : File;
	bulkUploadData? : KalturaBulkUploadJobData;
	bulkUploadEntryData? : KalturaBulkUploadEntryData;
}

/** 
* Add new bulk upload batch job   Conversion profile id can be specified in the
* API or in the CSV file, the one in the CSV file will be stronger.   If no
* conversion profile was specified, partner's default will be used
**/
export class MediaBulkUploadAddAction extends KalturaUploadRequest<KalturaBulkUpload> {

    fileData : File;
	bulkUploadData : KalturaBulkUploadJobData;
	bulkUploadEntryData : KalturaBulkUploadEntryData;

    constructor(data : MediaBulkUploadAddActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaBulkUpload', responseConstructor : KalturaBulkUpload  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'media'  },
				action : { type : 'c' , default : 'bulkUploadAdd'  },
				fileData : { type : 'f'   },
				bulkUploadData : { type : 'o'   , fallbackConstructor :  KalturaBulkUploadJobData, subType : 'KalturaBulkUploadJobData'},
				bulkUploadEntryData : { type : 'o'   , fallbackConstructor :  KalturaBulkUploadEntryData, subType : 'KalturaBulkUploadEntryData'}
            }
        );
        return result;
    }
}

