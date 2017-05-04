
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SyndicationFeedDeleteActionArgs  extends KalturaRequestArgs {
    id : string;
}

/** 
* Delete Syndication Feed by ID
**/
export class SyndicationFeedDeleteAction extends KalturaRequest<void> {

    id : string;

    constructor(data : SyndicationFeedDeleteActionArgs)
    {
        super(data, 'v', '');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'syndicationfeed' },
				action : { type : 'c' , default : 'delete' },
				id : { type : 's'  }
            }
        );
        return result;
    }
}

