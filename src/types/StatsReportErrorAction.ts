
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface StatsReportErrorActionArgs  extends KalturaRequestArgs {
    errorCode : string;
	errorMessage : string;
}

/** 
* Use this action to report errors to the kaltura server.
**/
export class StatsReportErrorAction extends KalturaRequest<void> {

    errorCode : string;
	errorMessage : string;

    constructor(data : StatsReportErrorActionArgs)
    {
        super(data, 'v', '');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'stats' },
				action : { type : 'c' , default : 'reportError' },
				errorCode : { type : 's'  },
				errorMessage : { type : 's'  }
            }
        );
        return result;
    }
}

