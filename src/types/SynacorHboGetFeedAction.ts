
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SynacorHboGetFeedActionArgs  extends KalturaRequestArgs {
    distributionProfileId : number;
	hash : string;
}


export class SynacorHboGetFeedAction extends KalturaRequest<string> {

    distributionProfileId : number;
	hash : string;

    constructor(data : SynacorHboGetFeedActionArgs)
    {
        super(data, 'f', '');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'synacorhbodistribution_synacorhbo' },
				action : { type : 'c' , default : 'getFeed' },
				distributionProfileId : { type : 'n'  },
				hash : { type : 's'  }
            }
        );
        return result;
    }
}

