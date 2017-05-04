
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBulkUpload } from './KalturaBulkUpload';

import { KalturaBulkUploadICalJobData } from './KalturaBulkUploadICalJobData';
import { KalturaUploadRequest, KalturaUploadRequestArgs } from '../kaltura-upload-request';

export interface ScheduleEventAddFromBulkUploadActionArgs  extends KalturaUploadRequestArgs {
    fileData : File;
	bulkUploadData? : KalturaBulkUploadICalJobData;
}

/** 
* Add new bulk upload batch job
**/
export class ScheduleEventAddFromBulkUploadAction extends KalturaUploadRequest<KalturaBulkUpload> {

    fileData : File;
	bulkUploadData : KalturaBulkUploadICalJobData;

    constructor(data : ScheduleEventAddFromBulkUploadActionArgs)
    {
        super(data, 'o', 'KalturaBulkUpload');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'schedule_scheduleevent' },
				action : { type : 'c' , default : 'addFromBulkUpload' },
				fileData : { type : 'f'  },
				bulkUploadData : { type : 'o'  , subType : 'KalturaBulkUploadICalJobData'}
            }
        );
        return result;
    }
}

