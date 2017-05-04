
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaThumbAsset } from './KalturaThumbAsset';

import { KalturaUploadRequest, KalturaUploadRequestArgs } from '../kaltura-upload-request';

export interface ThumbAssetAddFromImageActionArgs  extends KalturaUploadRequestArgs {
    entryId : string;
	fileData : File;
}


export class ThumbAssetAddFromImageAction extends KalturaUploadRequest<KalturaThumbAsset> {

    entryId : string;
	fileData : File;

    constructor(data : ThumbAssetAddFromImageActionArgs)
    {
        super(data, 'o', 'KalturaThumbAsset');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'thumbasset' },
				action : { type : 'c' , default : 'addFromImage' },
				entryId : { type : 's'  },
				fileData : { type : 'f'  }
            }
        );
        return result;
    }
}

