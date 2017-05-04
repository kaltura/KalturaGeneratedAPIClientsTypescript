
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaUploadRequest, KalturaUploadRequestArgs } from '../kaltura-upload-request';

export interface MediaUploadActionArgs  extends KalturaUploadRequestArgs {
    fileData : File;
}

/** 
* Upload a media file to Kaltura, then the file can be used to create a media
* entry.
**/
export class MediaUploadAction extends KalturaUploadRequest<string> {

    fileData : File;

    constructor(data : MediaUploadActionArgs)
    {
        super(data, 's', '');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'media' },
				action : { type : 'c' , default : 'upload' },
				fileData : { type : 'f'  }
            }
        );
        return result;
    }
}

