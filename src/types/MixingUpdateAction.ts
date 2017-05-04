
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMixEntry } from './KalturaMixEntry';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface MixingUpdateActionArgs  extends KalturaRequestArgs {
    entryId : string;
	mixEntry : KalturaMixEntry;
}

/** 
* Update mix entry. Only the properties that were set will be updated.
**/
export class MixingUpdateAction extends KalturaRequest<KalturaMixEntry> {

    entryId : string;
	mixEntry : KalturaMixEntry;

    constructor(data : MixingUpdateActionArgs)
    {
        super(data, 'o', 'KalturaMixEntry');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'mixing' },
				action : { type : 'c' , default : 'update' },
				entryId : { type : 's'  },
				mixEntry : { type : 'o'  , subType : 'KalturaMixEntry'}
            }
        );
        return result;
    }
}

