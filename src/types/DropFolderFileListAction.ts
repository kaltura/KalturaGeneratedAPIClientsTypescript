
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDropFolderFileListResponse } from './KalturaDropFolderFileListResponse';

import { KalturaDropFolderFileFilter } from './KalturaDropFolderFileFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DropFolderFileListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaDropFolderFileFilter;
	pager? : KalturaFilterPager;
}

/** 
* List KalturaDropFolderFile objects
**/
export class DropFolderFileListAction extends KalturaRequest<KalturaDropFolderFileListResponse> {

    filter : KalturaDropFolderFileFilter;
	pager : KalturaFilterPager;

    constructor(data? : DropFolderFileListActionArgs)
    {
        super(data, 'o', 'KalturaDropFolderFileListResponse');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'dropfolder_dropfolderfile' },
				action : { type : 'c' , default : 'list' },
				filter : { type : 'o'  , subType : 'KalturaDropFolderFileFilter'},
				pager : { type : 'o'  , subType : 'KalturaFilterPager'}
            }
        );
        return result;
    }
}

