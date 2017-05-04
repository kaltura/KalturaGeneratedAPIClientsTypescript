
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaModerationFlag } from './KalturaModerationFlag';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface BaseEntryFlagActionArgs  extends KalturaRequestArgs {
    moderationFlag : KalturaModerationFlag;
}

/** 
* Flag inappropriate entry for moderation.
**/
export class BaseEntryFlagAction extends KalturaRequest<void> {

    moderationFlag : KalturaModerationFlag;

    constructor(data : BaseEntryFlagActionArgs)
    {
        super(data, 'v', '');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'baseentry' },
				action : { type : 'c' , default : 'flag' },
				moderationFlag : { type : 'o'  , subType : 'KalturaModerationFlag'}
            }
        );
        return result;
    }
}

