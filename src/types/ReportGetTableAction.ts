
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaReportTable } from './KalturaReportTable';

import { KalturaReportType } from './KalturaReportType';
import { KalturaReportInputFilter } from './KalturaReportInputFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ReportGetTableActionArgs  extends KalturaRequestArgs {
    reportType : KalturaReportType;
	reportInputFilter : KalturaReportInputFilter;
	pager : KalturaFilterPager;
	order? : string;
	objectIds? : string;
}

/** 
* report getTable action allows to get a graph data for a specific report.
**/
export class ReportGetTableAction extends KalturaRequest<KalturaReportTable> {

    reportType : KalturaReportType;
	reportInputFilter : KalturaReportInputFilter;
	pager : KalturaFilterPager;
	order : string;
	objectIds : string;

    constructor(data : ReportGetTableActionArgs)
    {
        super(data, 'o', 'KalturaReportTable');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'report' },
				action : { type : 'c' , default : 'getTable' },
				reportType : { type : 'es'  , subType : 'KalturaReportType'},
				reportInputFilter : { type : 'o'  , subType : 'KalturaReportInputFilter'},
				pager : { type : 'o'  , subType : 'KalturaFilterPager'},
				order : { type : 's'  },
				objectIds : { type : 's'  }
            }
        );
        return result;
    }
}

