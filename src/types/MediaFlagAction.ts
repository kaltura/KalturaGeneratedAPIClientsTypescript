
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaModerationFlag } from './KalturaModerationFlag';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface MediaFlagActionArgs  extends KalturaRequestArgs {
    moderationFlag : KalturaModerationFlag;
}

/** 
* Flag inappropriate media entry for moderation
**/
export class MediaFlagAction extends KalturaRequest<void> {

    moderationFlag : KalturaModerationFlag;

    constructor(data : MediaFlagActionArgs)
    {
        super(data, 'v', '');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'media' },
				action : { type : 'c' , default : 'flag' },
				moderationFlag : { type : 'o'  , subType : 'KalturaModerationFlag'}
            }
        );
        return result;
    }
}

