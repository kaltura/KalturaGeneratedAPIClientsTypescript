
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBaseEntry } from './KalturaBaseEntry';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface BaseEntryGetActionArgs  extends KalturaRequestArgs {
    entryId : string;
	version? : number;
}

/** 
* Get base entry by ID.
**/
export class BaseEntryGetAction extends KalturaRequest<KalturaBaseEntry> {

    entryId : string;
	version : number;

    constructor(data : BaseEntryGetActionArgs)
    {
        super(data, 'o', 'KalturaBaseEntry');
        if (typeof this.version === 'undefined') this.version = -1;
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'baseentry' },
				action : { type : 'c' , default : 'get' },
				entryId : { type : 's'  },
				version : { type : 'n'  }
            }
        );
        return result;
    }
}

