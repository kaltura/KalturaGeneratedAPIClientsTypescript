
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEntryVendorTask } from './KalturaEntryVendorTask';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface EntryVendorTaskReplaceOutputActionArgs  extends KalturaRequestArgs {
    id : number;
	newOutput : string;
}

/**
 * Build request payload for service 'entryVendorTask' action 'replaceOutput'.
 *
 * 
 *
 * Server response type:         KalturaEntryVendorTask
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class EntryVendorTaskReplaceOutputAction extends KalturaRequest<KalturaEntryVendorTask> {

    id : number;
	newOutput : string;

    constructor(data : EntryVendorTaskReplaceOutputActionArgs)
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
				action : { type : 'c', default : 'replaceOutput' },
				id : { type : 'n' },
				newOutput : { type : 's' }
            }
        );
        return result;
    }
}

