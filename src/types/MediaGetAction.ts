
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMediaEntry } from './KalturaMediaEntry';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface MediaGetActionArgs  extends KalturaRequestArgs {
    entryId : string;
	version? : number;
}

/** 
* Get media entry by ID.
**/
export class MediaGetAction extends KalturaRequest<KalturaMediaEntry> {

    entryId : string;
	version : number;

    constructor(data : MediaGetActionArgs)
    {
        super(data, 'o', 'KalturaMediaEntry');
        if (typeof this.version === 'undefined') this.version = -1;
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'media' },
				action : { type : 'c' , default : 'get' },
				entryId : { type : 's'  },
				version : { type : 'n'  }
            }
        );
        return result;
    }
}

