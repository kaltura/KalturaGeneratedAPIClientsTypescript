
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMetadataProfile } from './KalturaMetadataProfile';

import { KalturaUploadRequest, KalturaUploadRequestArgs } from '../kaltura-upload-request';

export interface MetadataProfileUpdateTransformationFromFileActionArgs  extends KalturaUploadRequestArgs {
    id : number;
	xsltFile : File;
}

/** 
* Update an existing metadata object xslt file
**/
export class MetadataProfileUpdateTransformationFromFileAction extends KalturaUploadRequest<KalturaMetadataProfile> {

    id : number;
	xsltFile : File;

    constructor(data : MetadataProfileUpdateTransformationFromFileActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaMetadataProfile', responseConstructor : KalturaMetadataProfile  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'metadata_metadataprofile'  },
				action : { type : 'c' , default : 'updateTransformationFromFile'  },
				id : { type : 'n'   },
				xsltFile : { type : 'f'   }
            }
        );
        return result;
    }
}

