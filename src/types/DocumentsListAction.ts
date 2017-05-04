
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDocumentListResponse } from './KalturaDocumentListResponse';

import { KalturaDocumentEntryFilter } from './KalturaDocumentEntryFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DocumentsListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaDocumentEntryFilter;
	pager? : KalturaFilterPager;
}

/** 
* List document entries by filter with paging support.
**/
export class DocumentsListAction extends KalturaRequest<KalturaDocumentListResponse> {

    filter : KalturaDocumentEntryFilter;
	pager : KalturaFilterPager;

    constructor(data? : DocumentsListActionArgs)
    {
        super(data, 'o', 'KalturaDocumentListResponse');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'document_documents' },
				action : { type : 'c' , default : 'list' },
				filter : { type : 'o'  , subType : 'KalturaDocumentEntryFilter'},
				pager : { type : 'o'  , subType : 'KalturaFilterPager'}
            }
        );
        return result;
    }
}

