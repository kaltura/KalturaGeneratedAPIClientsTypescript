
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ThumbAssetDeleteActionArgs  extends KalturaRequestArgs {
    thumbAssetId : string;
}


export class ThumbAssetDeleteAction extends KalturaRequest<void> {

    thumbAssetId : string;

    constructor(data : ThumbAssetDeleteActionArgs)
    {
        super(data, 'v', '');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'thumbasset' },
				action : { type : 'c' , default : 'delete' },
				thumbAssetId : { type : 's'  }
            }
        );
        return result;
    }
}

