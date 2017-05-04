
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface FlavorAssetServeAdStitchCmdActionArgs  extends KalturaRequestArgs {
    assetId : string;
	ffprobeJson? : string;
	duration? : string;
}

/** 
* serve cmd line to transcode the ad
**/
export class FlavorAssetServeAdStitchCmdAction extends KalturaRequest<string> {

    assetId : string;
	ffprobeJson : string;
	duration : string;

    constructor(data : FlavorAssetServeAdStitchCmdActionArgs)
    {
        super(data, 's', '');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'flavorasset' },
				action : { type : 'c' , default : 'serveAdStitchCmd' },
				assetId : { type : 's'  },
				ffprobeJson : { type : 's'  },
				duration : { type : 's'  }
            }
        );
        return result;
    }
}

