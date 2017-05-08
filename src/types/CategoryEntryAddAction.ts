
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCategoryEntry } from './KalturaCategoryEntry';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CategoryEntryAddActionArgs  extends KalturaRequestArgs {
    categoryEntry : KalturaCategoryEntry;
}

/** 
* Add new CategoryEntry
**/
export class CategoryEntryAddAction extends KalturaRequest<KalturaCategoryEntry> {

    categoryEntry : KalturaCategoryEntry;

    constructor(data : CategoryEntryAddActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaCategoryEntry', responseConstructor : KalturaCategoryEntry  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'categoryentry'  },
				action : { type : 'c' , default : 'add'  },
				categoryEntry : { type : 'o'   , fallbackConstructor :  KalturaCategoryEntry, subType : 'KalturaCategoryEntry'}
            }
        );
        return result;
    }
}

