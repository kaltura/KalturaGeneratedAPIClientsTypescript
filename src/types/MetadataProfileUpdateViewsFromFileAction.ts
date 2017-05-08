
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMetadataProfile } from './KalturaMetadataProfile';

import { KalturaUploadRequest, KalturaUploadRequestArgs } from '../kaltura-upload-request';

export interface MetadataProfileUpdateViewsFromFileActionArgs  extends KalturaUploadRequestArgs {
    id : number;
	viewsFile : File;
}

/** 
* Update an existing metadata object views file
**/
export class MetadataProfileUpdateViewsFromFileAction extends KalturaUploadRequest<KalturaMetadataProfile> {

    id : number;
	viewsFile : File;

    constructor(data : MetadataProfileUpdateViewsFromFileActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaMetadataProfile', responseConstructor : KalturaMetadataProfile  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'metadata_metadataprofile' },
				action : { type : 'c', default : 'updateViewsFromFile' },
				id : { type : 'n' },
				viewsFile : { type : 'f' }
            }
        );
        return result;
    }
}

