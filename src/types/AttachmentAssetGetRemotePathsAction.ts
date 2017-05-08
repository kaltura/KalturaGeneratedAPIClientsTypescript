
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRemotePathListResponse } from './KalturaRemotePathListResponse';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AttachmentAssetGetRemotePathsActionArgs  extends KalturaRequestArgs {
    id : string;
}

/** 
* Get remote storage existing paths for the asset
**/
export class AttachmentAssetGetRemotePathsAction extends KalturaRequest<KalturaRemotePathListResponse> {

    id : string;

    constructor(data : AttachmentAssetGetRemotePathsActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaRemotePathListResponse', responseConstructor : KalturaRemotePathListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'attachment_attachmentasset'  },
				action : { type : 'c' , default : 'getRemotePaths'  },
				id : { type : 's'   }
            }
        );
        return result;
    }
}

