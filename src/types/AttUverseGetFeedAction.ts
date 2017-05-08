
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AttUverseGetFeedActionArgs  extends KalturaRequestArgs {
    distributionProfileId : number;
	hash : string;
}


export class AttUverseGetFeedAction extends KalturaRequest<string> {

    distributionProfileId : number;
	hash : string;

    constructor(data : AttUverseGetFeedActionArgs)
    {
        super(data, {responseType : 'f', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'attuversedistribution_attuverse'  },
				action : { type : 'c' , default : 'getFeed'  },
				distributionProfileId : { type : 'n'   },
				hash : { type : 's'   }
            }
        );
        return result;
    }
}

