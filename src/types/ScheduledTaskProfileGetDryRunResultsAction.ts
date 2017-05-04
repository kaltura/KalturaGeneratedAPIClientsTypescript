
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectListResponse } from './KalturaObjectListResponse';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ScheduledTaskProfileGetDryRunResultsActionArgs  extends KalturaRequestArgs {
    requestId : number;
}


export class ScheduledTaskProfileGetDryRunResultsAction extends KalturaRequest<KalturaObjectListResponse> {

    requestId : number;

    constructor(data : ScheduledTaskProfileGetDryRunResultsActionArgs)
    {
        super(data, 'o', 'KalturaObjectListResponse');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'scheduledtask_scheduledtaskprofile' },
				action : { type : 'c' , default : 'getDryRunResults' },
				requestId : { type : 'n'  }
            }
        );
        return result;
    }
}

