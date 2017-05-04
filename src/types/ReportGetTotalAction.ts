
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaReportTotal } from './KalturaReportTotal';

import { KalturaReportType } from './KalturaReportType';
import { KalturaReportInputFilter } from './KalturaReportInputFilter';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ReportGetTotalActionArgs  extends KalturaRequestArgs {
    reportType : KalturaReportType;
	reportInputFilter : KalturaReportInputFilter;
	objectIds? : string;
}

/** 
* report getTotal action allows to get a graph data for a specific report.
**/
export class ReportGetTotalAction extends KalturaRequest<KalturaReportTotal> {

    reportType : KalturaReportType;
	reportInputFilter : KalturaReportInputFilter;
	objectIds : string;

    constructor(data : ReportGetTotalActionArgs)
    {
        super(data, 'o', 'KalturaReportTotal');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'report' },
				action : { type : 'c' , default : 'getTotal' },
				reportType : { type : 'es'  , subType : 'KalturaReportType'},
				reportInputFilter : { type : 'o'  , subType : 'KalturaReportInputFilter'},
				objectIds : { type : 's'  }
            }
        );
        return result;
    }
}

