
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMetadataProfileListResponse } from './KalturaMetadataProfileListResponse';

import { KalturaMetadataProfileFilter } from './KalturaMetadataProfileFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface MetadataProfileListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaMetadataProfileFilter;
	pager? : KalturaFilterPager;
}

/** 
* List metadata profile objects by filter and pager
**/
export class MetadataProfileListAction extends KalturaRequest<KalturaMetadataProfileListResponse> {

    filter : KalturaMetadataProfileFilter;
	pager : KalturaFilterPager;

    constructor(data? : MetadataProfileListActionArgs)
    {
        super(data, 'o', 'KalturaMetadataProfileListResponse');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'metadata_metadataprofile' },
				action : { type : 'c' , default : 'list' },
				filter : { type : 'o'  , subType : 'KalturaMetadataProfileFilter'},
				pager : { type : 'o'  , subType : 'KalturaFilterPager'}
            }
        );
        return result;
    }
}

