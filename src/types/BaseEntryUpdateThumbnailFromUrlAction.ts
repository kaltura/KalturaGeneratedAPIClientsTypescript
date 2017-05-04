
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBaseEntry } from './KalturaBaseEntry';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface BaseEntryUpdateThumbnailFromUrlActionArgs  extends KalturaRequestArgs {
    entryId : string;
	url : string;
}

/** 
* Update entry thumbnail using url.
**/
export class BaseEntryUpdateThumbnailFromUrlAction extends KalturaRequest<KalturaBaseEntry> {

    entryId : string;
	url : string;

    constructor(data : BaseEntryUpdateThumbnailFromUrlActionArgs)
    {
        super(data, 'o', 'KalturaBaseEntry');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'baseentry' },
				action : { type : 'c' , default : 'updateThumbnailFromUrl' },
				entryId : { type : 's'  },
				url : { type : 's'  }
            }
        );
        return result;
    }
}

