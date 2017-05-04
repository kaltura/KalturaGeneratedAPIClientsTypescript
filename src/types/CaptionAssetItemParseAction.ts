
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CaptionAssetItemParseActionArgs  extends KalturaRequestArgs {
    captionAssetId : string;
}

/** 
* Parse content of caption asset and index it
**/
export class CaptionAssetItemParseAction extends KalturaRequest<void> {

    captionAssetId : string;

    constructor(data : CaptionAssetItemParseActionArgs)
    {
        super(data, 'v', '');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'captionsearch_captionassetitem' },
				action : { type : 'c' , default : 'parse' },
				captionAssetId : { type : 's'  }
            }
        );
        return result;
    }
}

