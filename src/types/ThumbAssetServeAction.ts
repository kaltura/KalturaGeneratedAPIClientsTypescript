
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaThumbParams } from './KalturaThumbParams';
import { KalturaThumbnailServeOptions } from './KalturaThumbnailServeOptions';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ThumbAssetServeActionArgs  extends KalturaRequestArgs {
    thumbAssetId : string;
	version? : number;
	thumbParams? : KalturaThumbParams;
	options? : KalturaThumbnailServeOptions;
}

/** 
* Serves thumbnail by its id
**/
export class ThumbAssetServeAction extends KalturaRequest<string> {

    thumbAssetId : string;
	version : number;
	thumbParams : KalturaThumbParams;
	options : KalturaThumbnailServeOptions;

    constructor(data : ThumbAssetServeActionArgs)
    {
        super(data, 'f', '');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'thumbasset' },
				action : { type : 'c' , default : 'serve' },
				thumbAssetId : { type : 's'  },
				version : { type : 'n'  },
				thumbParams : { type : 'o'  , subType : 'KalturaThumbParams'},
				options : { type : 'o'  , subType : 'KalturaThumbnailServeOptions'}
            }
        );
        return result;
    }
}

