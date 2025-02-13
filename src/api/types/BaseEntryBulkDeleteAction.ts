
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaBaseEntryFilter } from './KalturaBaseEntryFilter';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface BaseEntryBulkDeleteActionArgs  extends KalturaRequestArgs {
    filter : KalturaBaseEntryFilter;
}

/**
 * Build request payload for service 'baseEntry' action 'bulkDelete'.
 *
 * 
 *
 * Server response type:         number
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class BaseEntryBulkDeleteAction extends KalturaRequest<number> {

    filter : KalturaBaseEntryFilter;

    constructor(data : BaseEntryBulkDeleteActionArgs)
    {
        super(data, {responseType : 'n', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'baseentry' },
				action : { type : 'c', default : 'bulkDelete' },
				filter : { type : 'o', subTypeConstructor : KalturaBaseEntryFilter, subType : 'KalturaBaseEntryFilter' }
            }
        );
        return result;
    }
}

