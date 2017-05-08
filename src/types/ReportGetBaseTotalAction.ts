
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaReportBaseTotal } from './KalturaReportBaseTotal';

import { KalturaReportType } from './KalturaReportType';
import { KalturaReportInputFilter } from './KalturaReportInputFilter';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ReportGetBaseTotalActionArgs  extends KalturaRequestArgs {
    reportType : KalturaReportType;
	reportInputFilter : KalturaReportInputFilter;
	objectIds? : string;
}

/** 
* report getBaseTotal action allows to get a the total base for storage reports
**/
export class ReportGetBaseTotalAction extends KalturaRequest<KalturaReportBaseTotal[]> {

    reportType : KalturaReportType;
	reportInputFilter : KalturaReportInputFilter;
	objectIds : string;

    constructor(data : ReportGetBaseTotalActionArgs)
    {
        super(data, {responseType : 'a', responseSubType : 'KalturaReportBaseTotal', responseConstructor : KalturaReportBaseTotal  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'report'  },
				action : { type : 'c' , default : 'getBaseTotal'  },
				reportType : { type : 'es'   , subType : 'KalturaReportType'},
				reportInputFilter : { type : 'o'   , fallbackConstructor :  KalturaReportInputFilter, subType : 'KalturaReportInputFilter'},
				objectIds : { type : 's'   }
            }
        );
        return result;
    }
}

