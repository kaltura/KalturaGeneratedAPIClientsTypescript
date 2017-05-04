
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface NdnGetFeedActionArgs  extends KalturaRequestArgs {
    distributionProfileId : number;
	hash : string;
}


export class NdnGetFeedAction extends KalturaRequest<string> {

    distributionProfileId : number;
	hash : string;

    constructor(data : NdnGetFeedActionArgs)
    {
        super(data, 'f', '');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'ndndistribution_ndn' },
				action : { type : 'c' , default : 'getFeed' },
				distributionProfileId : { type : 'n'  },
				hash : { type : 's'  }
            }
        );
        return result;
    }
}

