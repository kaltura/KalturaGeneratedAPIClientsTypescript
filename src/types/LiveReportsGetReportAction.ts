
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveStatsListResponse } from './KalturaLiveStatsListResponse';

import { KalturaLiveReportType } from './KalturaLiveReportType';
import { KalturaLiveReportInputFilter } from './KalturaLiveReportInputFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface LiveReportsGetReportActionArgs  extends KalturaRequestArgs {
    reportType : KalturaLiveReportType;
	filter? : KalturaLiveReportInputFilter;
	pager? : KalturaFilterPager;
}


export class LiveReportsGetReportAction extends KalturaRequest<KalturaLiveStatsListResponse> {

    reportType : KalturaLiveReportType;
	filter : KalturaLiveReportInputFilter;
	pager : KalturaFilterPager;

    constructor(data : LiveReportsGetReportActionArgs)
    {
        super(data, 'o', 'KalturaLiveStatsListResponse');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'livereports' },
				action : { type : 'c' , default : 'getReport' },
				reportType : { type : 'es'  , subType : 'KalturaLiveReportType'},
				filter : { type : 'o'  , subType : 'KalturaLiveReportInputFilter'},
				pager : { type : 'o'  , subType : 'KalturaFilterPager'}
            }
        );
        return result;
    }
}

