
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMediaEntry } from './KalturaMediaEntry';

import { KalturaSearchResult } from './KalturaSearchResult';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface MediaAddFromSearchResultActionArgs  extends KalturaRequestArgs {
    mediaEntry? : KalturaMediaEntry;
	searchResult? : KalturaSearchResult;
}

/** 
* Adds new media entry by importing the media file from a search provider.   This
* action should be used with the search service result.
**/
export class MediaAddFromSearchResultAction extends KalturaRequest<KalturaMediaEntry> {

    mediaEntry : KalturaMediaEntry;
	searchResult : KalturaSearchResult;

    constructor(data? : MediaAddFromSearchResultActionArgs)
    {
        super(data, 'o', 'KalturaMediaEntry');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'media' },
				action : { type : 'c' , default : 'addFromSearchResult' },
				mediaEntry : { type : 'o'  , subType : 'KalturaMediaEntry'},
				searchResult : { type : 'o'  , subType : 'KalturaSearchResult'}
            }
        );
        return result;
    }
}

