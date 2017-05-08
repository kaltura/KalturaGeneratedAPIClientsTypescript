
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMediaEntry } from './KalturaMediaEntry';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface MediaAddFromUploadedFileActionArgs  extends KalturaRequestArgs {
    mediaEntry : KalturaMediaEntry;
	uploadTokenId : string;
}

/** 
* Add new entry after the specific media file was uploaded and the upload token id
* exists
**/
export class MediaAddFromUploadedFileAction extends KalturaRequest<KalturaMediaEntry> {

    mediaEntry : KalturaMediaEntry;
	uploadTokenId : string;

    constructor(data : MediaAddFromUploadedFileActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaMediaEntry', responseConstructor : KalturaMediaEntry  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'media'  },
				action : { type : 'c' , default : 'addFromUploadedFile'  },
				mediaEntry : { type : 'o'   , fallbackConstructor :  KalturaMediaEntry, subType : 'KalturaMediaEntry'},
				uploadTokenId : { type : 's'   }
            }
        );
        return result;
    }
}

