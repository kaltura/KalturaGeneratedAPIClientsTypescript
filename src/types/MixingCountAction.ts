
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaMediaEntryFilter } from './KalturaMediaEntryFilter';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface MixingCountActionArgs  extends KalturaRequestArgs {
    filter? : KalturaMediaEntryFilter;
}

/** 
* Count mix entries by filter.
**/
export class MixingCountAction extends KalturaRequest<number> {

    filter : KalturaMediaEntryFilter;

    constructor(data? : MixingCountActionArgs)
    {
        super(data, 'n', '');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'mixing' },
				action : { type : 'c' , default : 'count' },
				filter : { type : 'o'  , subType : 'KalturaMediaEntryFilter'}
            }
        );
        return result;
    }
}

