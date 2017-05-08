
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCuePointListResponse } from './KalturaCuePointListResponse';

import { KalturaUploadRequest, KalturaUploadRequestArgs } from '../kaltura-upload-request';

export interface CuePointAddFromBulkActionArgs  extends KalturaUploadRequestArgs {
    fileData : File;
}

/** 
* Allows you to add multiple cue points objects by uploading XML that contains
* multiple cue point definitions
**/
export class CuePointAddFromBulkAction extends KalturaUploadRequest<KalturaCuePointListResponse> {

    fileData : File;

    constructor(data : CuePointAddFromBulkActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaCuePointListResponse', responseConstructor : KalturaCuePointListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'cuepoint_cuepoint' },
				action : { type : 'c', default : 'addFromBulk' },
				fileData : { type : 'f' }
            }
        );
        return result;
    }
}

