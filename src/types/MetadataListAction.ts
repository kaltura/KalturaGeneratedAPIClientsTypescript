
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMetadataListResponse } from './KalturaMetadataListResponse';

import { KalturaMetadataFilter } from './KalturaMetadataFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface MetadataListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaMetadataFilter;
	pager? : KalturaFilterPager;
}

/** 
* List metadata objects by filter and pager
**/
export class MetadataListAction extends KalturaRequest<KalturaMetadataListResponse> {

    filter : KalturaMetadataFilter;
	pager : KalturaFilterPager;

    constructor(data? : MetadataListActionArgs)
    {
        super(data, 'o', 'KalturaMetadataListResponse');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'metadata_metadata' },
				action : { type : 'c' , default : 'list' },
				filter : { type : 'o'  , subType : 'KalturaMetadataFilter'},
				pager : { type : 'o'  , subType : 'KalturaFilterPager'}
            }
        );
        return result;
    }
}

