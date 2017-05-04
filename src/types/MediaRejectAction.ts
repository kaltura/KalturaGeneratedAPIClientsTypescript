
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface MediaRejectActionArgs  extends KalturaRequestArgs {
    entryId : string;
}

/** 
* Reject the media entry and mark the pending flags (if any) as moderated (this
* will make the entry non playable)
**/
export class MediaRejectAction extends KalturaRequest<void> {

    entryId : string;

    constructor(data : MediaRejectActionArgs)
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
				action : { type : 'c' , default : 'reject' },
				entryId : { type : 's'  }
            }
        );
        return result;
    }
}

