
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDropFolderListResponse } from './KalturaDropFolderListResponse';

import { KalturaDropFolderFilter } from './KalturaDropFolderFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DropFolderListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaDropFolderFilter;
	pager? : KalturaFilterPager;
}

/** 
* List KalturaDropFolder objects
**/
export class DropFolderListAction extends KalturaRequest<KalturaDropFolderListResponse> {

    filter : KalturaDropFolderFilter;
	pager : KalturaFilterPager;

    constructor(data? : DropFolderListActionArgs)
    {
        super(data, 'o', 'KalturaDropFolderListResponse');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'dropfolder_dropfolder' },
				action : { type : 'c' , default : 'list' },
				filter : { type : 'o'  , subType : 'KalturaDropFolderFilter'},
				pager : { type : 'o'  , subType : 'KalturaFilterPager'}
            }
        );
        return result;
    }
}

