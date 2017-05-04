
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface MediaDeleteActionArgs  extends KalturaRequestArgs {
    entryId : string;
}

/** 
* Delete a media entry.
**/
export class MediaDeleteAction extends KalturaRequest<void> {

    entryId : string;

    constructor(data : MediaDeleteActionArgs)
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
				action : { type : 'c' , default : 'delete' },
				entryId : { type : 's'  }
            }
        );
        return result;
    }
}

