
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCuePointListResponse } from './KalturaCuePointListResponse';

import { KalturaUploadRequest, KalturaUploadRequestArgs } from '../kaltura-upload-request';

export interface AnnotationAddFromBulkActionArgs  extends KalturaUploadRequestArgs {
    fileData : File;
}

/** 
* Allows you to add multiple cue points objects by uploading XML that contains
* multiple cue point definitions
**/
export class AnnotationAddFromBulkAction extends KalturaUploadRequest<KalturaCuePointListResponse> {

    fileData : File;

    constructor(data : AnnotationAddFromBulkActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaCuePointListResponse', responseConstructor : KalturaCuePointListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'annotation_annotation' },
				action : { type : 'c', default : 'addFromBulk' },
				fileData : { type : 'f' }
            }
        );
        return result;
    }
}

