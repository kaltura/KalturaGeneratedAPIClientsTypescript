
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRemotePathListResponse } from './KalturaRemotePathListResponse';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface BaseEntryGetRemotePathsActionArgs  extends KalturaRequestArgs {
    entryId : string;
}

/** 
* Get remote storage existing paths for the asset.
**/
export class BaseEntryGetRemotePathsAction extends KalturaRequest<KalturaRemotePathListResponse> {

    entryId : string;

    constructor(data : BaseEntryGetRemotePathsActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaRemotePathListResponse', responseConstructor : KalturaRemotePathListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'baseentry'  },
				action : { type : 'c' , default : 'getRemotePaths'  },
				entryId : { type : 's'   }
            }
        );
        return result;
    }
}

