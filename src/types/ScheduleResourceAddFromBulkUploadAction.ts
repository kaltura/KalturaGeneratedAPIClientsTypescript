
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBulkUpload } from './KalturaBulkUpload';

import { KalturaBulkUploadCsvJobData } from './KalturaBulkUploadCsvJobData';
import { KalturaUploadRequest, KalturaUploadRequestArgs } from '../kaltura-upload-request';

export interface ScheduleResourceAddFromBulkUploadActionArgs  extends KalturaUploadRequestArgs {
    fileData : File;
	bulkUploadData? : KalturaBulkUploadCsvJobData;
}

/** 
* Add new bulk upload batch job
**/
export class ScheduleResourceAddFromBulkUploadAction extends KalturaUploadRequest<KalturaBulkUpload> {

    fileData : File;
	bulkUploadData : KalturaBulkUploadCsvJobData;

    constructor(data : ScheduleResourceAddFromBulkUploadActionArgs)
    {
        super(data, 'o', 'KalturaBulkUpload');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'schedule_scheduleresource' },
				action : { type : 'c' , default : 'addFromBulkUpload' },
				fileData : { type : 'f'  },
				bulkUploadData : { type : 'o'  , subType : 'KalturaBulkUploadCsvJobData'}
            }
        );
        return result;
    }
}

