
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaESearchHistoryFilter } from './KalturaESearchHistoryFilter';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SearchHistoryExportToCsvActionArgs  extends KalturaRequestArgs {
    filter : KalturaESearchHistoryFilter;
}

/**
 * Build request payload for service 'searchHistory' action 'exportToCsv'.
 *
 * 
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class SearchHistoryExportToCsvAction extends KalturaRequest<string> {

    filter : KalturaESearchHistoryFilter;

    constructor(data : SearchHistoryExportToCsvActionArgs)
    {
        super(data, {responseType : 's', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'searchhistory_searchhistory' },
				action : { type : 'c', default : 'exportToCsv' },
				filter : { type : 'o', subTypeConstructor : KalturaESearchHistoryFilter, subType : 'KalturaESearchHistoryFilter' }
            }
        );
        return result;
    }
}

