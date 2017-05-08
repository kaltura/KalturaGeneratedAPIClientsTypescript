
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
        super(data, {responseType : 'o', responseSubType : 'KalturaMetadataListResponse', responseConstructor : KalturaMetadataListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'metadata_metadata'  },
				action : { type : 'c' , default : 'list'  },
				filter : { type : 'o'   , fallbackConstructor :  KalturaMetadataFilter, subType : 'KalturaMetadataFilter'},
				pager : { type : 'o'   , fallbackConstructor :  KalturaFilterPager, subType : 'KalturaFilterPager'}
            }
        );
        return result;
    }
}

