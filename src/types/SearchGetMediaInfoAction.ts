
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSearchResult } from './KalturaSearchResult';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SearchGetMediaInfoActionArgs  extends KalturaRequestArgs {
    searchResult : KalturaSearchResult;
}

/** 
* Retrieve extra information about media found in search action   Some providers
* return only part of the fields needed to create entry from, use this action to
* get the rest of the fields.
**/
export class SearchGetMediaInfoAction extends KalturaRequest<KalturaSearchResult> {

    searchResult : KalturaSearchResult;

    constructor(data : SearchGetMediaInfoActionArgs)
    {
        super(data, 'o', 'KalturaSearchResult');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'search' },
				action : { type : 'c' , default : 'getMediaInfo' },
				searchResult : { type : 'o'  , subType : 'KalturaSearchResult'}
            }
        );
        return result;
    }
}

