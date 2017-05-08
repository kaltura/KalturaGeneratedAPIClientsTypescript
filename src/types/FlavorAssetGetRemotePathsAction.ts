
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRemotePathListResponse } from './KalturaRemotePathListResponse';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface FlavorAssetGetRemotePathsActionArgs  extends KalturaRequestArgs {
    id : string;
}

/** 
* Get remote storage existing paths for the asset
**/
export class FlavorAssetGetRemotePathsAction extends KalturaRequest<KalturaRemotePathListResponse> {

    id : string;

    constructor(data : FlavorAssetGetRemotePathsActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaRemotePathListResponse', responseConstructor : KalturaRemotePathListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'flavorasset' },
				action : { type : 'c', default : 'getRemotePaths' },
				id : { type : 's' }
            }
        );
        return result;
    }
}

