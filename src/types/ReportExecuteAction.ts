
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaReportResponse } from './KalturaReportResponse';

import { KalturaKeyValue } from './KalturaKeyValue';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ReportExecuteActionArgs  extends KalturaRequestArgs {
    id : number;
	params? : KalturaKeyValue[];
}


export class ReportExecuteAction extends KalturaRequest<KalturaReportResponse> {

    id : number;
	params : KalturaKeyValue[];

    constructor(data : ReportExecuteActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaReportResponse', responseConstructor : KalturaReportResponse  });
        if (typeof this.params === 'undefined') this.params = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'report'  },
				action : { type : 'c' , default : 'execute'  },
				id : { type : 'n'   },
				params : { type : 'a'   , fallbackConstructor :  KalturaKeyValue, subType : 'KalturaKeyValue'}
            }
        );
        return result;
    }
}

