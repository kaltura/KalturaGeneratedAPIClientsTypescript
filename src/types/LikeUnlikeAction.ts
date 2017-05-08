
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface LikeUnlikeActionArgs  extends KalturaRequestArgs {
    entryId : string;
}


export class LikeUnlikeAction extends KalturaRequest<boolean> {

    entryId : string;

    constructor(data : LikeUnlikeActionArgs)
    {
        super(data, {responseType : 'b', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'like_like' },
				action : { type : 'c', default : 'unlike' },
				entryId : { type : 's' }
            }
        );
        return result;
    }
}

