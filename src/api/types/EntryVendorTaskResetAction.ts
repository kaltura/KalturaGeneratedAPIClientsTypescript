
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEntryVendorTask } from './KalturaEntryVendorTask';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface EntryVendorTaskResetActionArgs  extends KalturaRequestArgs {
    id : number;
	catalogItemId : number;
}

/**
 * Build request payload for service 'entryVendorTask' action 'reset'.
 *
 * Usage: Reset entry vendor task. change status back to pending with a new catalog item
 *
 * Server response type:         KalturaEntryVendorTask
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class EntryVendorTaskResetAction extends KalturaRequest<KalturaEntryVendorTask> {

    id : number;
	catalogItemId : number;

    constructor(data : EntryVendorTaskResetActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaEntryVendorTask', responseConstructor : KalturaEntryVendorTask  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'reach_entryvendortask' },
				action : { type : 'c', default : 'reset' },
				id : { type : 'n' },
				catalogItemId : { type : 'n' }
            }
        );
        return result;
    }
}

