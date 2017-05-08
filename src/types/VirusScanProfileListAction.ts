
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaVirusScanProfileListResponse } from './KalturaVirusScanProfileListResponse';

import { KalturaVirusScanProfileFilter } from './KalturaVirusScanProfileFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface VirusScanProfileListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaVirusScanProfileFilter;
	pager? : KalturaFilterPager;
}

/** 
* List virus scan profile objects by filter and pager
**/
export class VirusScanProfileListAction extends KalturaRequest<KalturaVirusScanProfileListResponse> {

    filter : KalturaVirusScanProfileFilter;
	pager : KalturaFilterPager;

    constructor(data? : VirusScanProfileListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaVirusScanProfileListResponse', responseConstructor : KalturaVirusScanProfileListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'virusscan_virusscanprofile'  },
				action : { type : 'c' , default : 'list'  },
				filter : { type : 'o'   , fallbackConstructor :  KalturaVirusScanProfileFilter, subType : 'KalturaVirusScanProfileFilter'},
				pager : { type : 'o'   , fallbackConstructor :  KalturaFilterPager, subType : 'KalturaFilterPager'}
            }
        );
        return result;
    }
}

