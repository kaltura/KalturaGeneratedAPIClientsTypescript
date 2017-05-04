
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRemotePathListResponse } from './KalturaRemotePathListResponse';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ThumbAssetGetRemotePathsActionArgs  extends KalturaRequestArgs {
    id : string;
}

/** 
* Get remote storage existing paths for the asset
**/
export class ThumbAssetGetRemotePathsAction extends KalturaRequest<KalturaRemotePathListResponse> {

    id : string;

    constructor(data : ThumbAssetGetRemotePathsActionArgs)
    {
        super(data, 'o', 'KalturaRemotePathListResponse');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'thumbasset' },
				action : { type : 'c' , default : 'getRemotePaths' },
				id : { type : 's'  }
            }
        );
        return result;
    }
}

