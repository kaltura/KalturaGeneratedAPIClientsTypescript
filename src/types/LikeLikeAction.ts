
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface LikeLikeActionArgs  extends KalturaRequestArgs {
    entryId : string;
}


export class LikeLikeAction extends KalturaRequest<boolean> {

    entryId : string;

    constructor(data : LikeLikeActionArgs)
    {
        super(data, {responseType : 'b', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'like_like'  },
				action : { type : 'c' , default : 'like'  },
				entryId : { type : 's'   }
            }
        );
        return result;
    }
}

