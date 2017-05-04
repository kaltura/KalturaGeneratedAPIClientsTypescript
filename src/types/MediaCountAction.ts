
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaMediaEntryFilter } from './KalturaMediaEntryFilter';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface MediaCountActionArgs  extends KalturaRequestArgs {
    filter? : KalturaMediaEntryFilter;
}

/** 
* Count media entries by filter.
**/
export class MediaCountAction extends KalturaRequest<number> {

    filter : KalturaMediaEntryFilter;

    constructor(data? : MediaCountActionArgs)
    {
        super(data, 'n', '');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'media' },
				action : { type : 'c' , default : 'count' },
				filter : { type : 'o'  , subType : 'KalturaMediaEntryFilter'}
            }
        );
        return result;
    }
}

