
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDataEntry } from './KalturaDataEntry';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DataUpdateActionArgs  extends KalturaRequestArgs {
    entryId : string;
	documentEntry : KalturaDataEntry;
}

/** 
* Update data entry. Only the properties that were set will be updated.
**/
export class DataUpdateAction extends KalturaRequest<KalturaDataEntry> {

    entryId : string;
	documentEntry : KalturaDataEntry;

    constructor(data : DataUpdateActionArgs)
    {
        super(data, 'o', 'KalturaDataEntry');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'data' },
				action : { type : 'c' , default : 'update' },
				entryId : { type : 's'  },
				documentEntry : { type : 'o'  , subType : 'KalturaDataEntry'}
            }
        );
        return result;
    }
}

