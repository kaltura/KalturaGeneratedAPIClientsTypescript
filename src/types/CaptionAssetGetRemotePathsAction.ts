
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRemotePathListResponse } from './KalturaRemotePathListResponse';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CaptionAssetGetRemotePathsActionArgs  extends KalturaRequestArgs {
    id : string;
}

/** 
* Get remote storage existing paths for the asset
**/
export class CaptionAssetGetRemotePathsAction extends KalturaRequest<KalturaRemotePathListResponse> {

    id : string;

    constructor(data : CaptionAssetGetRemotePathsActionArgs)
    {
        super(data, 'o', 'KalturaRemotePathListResponse');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'caption_captionasset' },
				action : { type : 'c' , default : 'getRemotePaths' },
				id : { type : 's'  }
            }
        );
        return result;
    }
}

