
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMediaEntry } from './KalturaMediaEntry';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface MediaUpdateActionArgs  extends KalturaRequestArgs {
    entryId : string;
	mediaEntry : KalturaMediaEntry;
}

/** 
* Update media entry. Only the properties that were set will be updated.
**/
export class MediaUpdateAction extends KalturaRequest<KalturaMediaEntry> {

    entryId : string;
	mediaEntry : KalturaMediaEntry;

    constructor(data : MediaUpdateActionArgs)
    {
        super(data, 'o', 'KalturaMediaEntry');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'media' },
				action : { type : 'c' , default : 'update' },
				entryId : { type : 's'  },
				mediaEntry : { type : 'o'  , subType : 'KalturaMediaEntry'}
            }
        );
        return result;
    }
}

