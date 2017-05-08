
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMediaEntry } from './KalturaMediaEntry';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface MediaAddFromEntryActionArgs  extends KalturaRequestArgs {
    sourceEntryId : string;
	mediaEntry? : KalturaMediaEntry;
	sourceFlavorParamsId? : number;
}

/** 
* Copy entry into new entry
**/
export class MediaAddFromEntryAction extends KalturaRequest<KalturaMediaEntry> {

    sourceEntryId : string;
	mediaEntry : KalturaMediaEntry;
	sourceFlavorParamsId : number;

    constructor(data : MediaAddFromEntryActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaMediaEntry', responseConstructor : KalturaMediaEntry  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'media'  },
				action : { type : 'c' , default : 'addFromEntry'  },
				sourceEntryId : { type : 's'   },
				mediaEntry : { type : 'o'   , fallbackConstructor :  KalturaMediaEntry, subType : 'KalturaMediaEntry'},
				sourceFlavorParamsId : { type : 'n'   }
            }
        );
        return result;
    }
}

