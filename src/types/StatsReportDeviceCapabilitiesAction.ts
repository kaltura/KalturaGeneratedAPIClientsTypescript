
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface StatsReportDeviceCapabilitiesActionArgs  extends KalturaRequestArgs {
    data : string;
}

/** 
* Use this action to report device capabilities to the kaltura server.
**/
export class StatsReportDeviceCapabilitiesAction extends KalturaRequest<void> {

    data : string;

    constructor(data : StatsReportDeviceCapabilitiesActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'stats' },
				action : { type : 'c', default : 'reportDeviceCapabilities' },
				data : { type : 's' }
            }
        );
        return result;
    }
}

