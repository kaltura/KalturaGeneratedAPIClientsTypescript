
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBulkUpload } from './KalturaBulkUpload';

import { KalturaBulkUploadType } from './KalturaBulkUploadType';
import { KalturaUploadRequest, KalturaUploadRequestArgs } from '../kaltura-upload-request';

export interface BulkUploadAddActionArgs  extends KalturaUploadRequestArgs {
    conversionProfileId : number;
	csvFileData : File;
	bulkUploadType? : KalturaBulkUploadType;
	uploadedBy? : string;
	fileName? : string;
}

/** 
* Add new bulk upload batch job   Conversion profile id can be specified in the
* API or in the CSV file, the one in the CSV file will be stronger.   If no
* conversion profile was specified, partner's default will be used
**/
export class BulkUploadAddAction extends KalturaUploadRequest<KalturaBulkUpload> {

    conversionProfileId : number;
	csvFileData : File;
	bulkUploadType : KalturaBulkUploadType;
	uploadedBy : string;
	fileName : string;

    constructor(data : BulkUploadAddActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaBulkUpload', responseConstructor : KalturaBulkUpload  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'bulkupload'  },
				action : { type : 'c' , default : 'add'  },
				conversionProfileId : { type : 'n'   },
				csvFileData : { type : 'f'   },
				bulkUploadType : { type : 'es'   , subType : 'KalturaBulkUploadType'},
				uploadedBy : { type : 's'   },
				fileName : { type : 's'   }
            }
        );
        return result;
    }
}

