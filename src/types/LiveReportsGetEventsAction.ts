
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaReportGraph } from './KalturaReportGraph';

import { KalturaLiveReportType } from './KalturaLiveReportType';
import { KalturaLiveReportInputFilter } from './KalturaLiveReportInputFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface LiveReportsGetEventsActionArgs  extends KalturaRequestArgs {
    reportType : KalturaLiveReportType;
	filter? : KalturaLiveReportInputFilter;
	pager? : KalturaFilterPager;
}


export class LiveReportsGetEventsAction extends KalturaRequest<KalturaReportGraph[]> {

    reportType : KalturaLiveReportType;
	filter : KalturaLiveReportInputFilter;
	pager : KalturaFilterPager;

    constructor(data : LiveReportsGetEventsActionArgs)
    {
        super(data, 'a', 'KalturaReportGraph');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'livereports' },
				action : { type : 'c' , default : 'getEvents' },
				reportType : { type : 'es'  , subType : 'KalturaLiveReportType'},
				filter : { type : 'o'  , subType : 'KalturaLiveReportInputFilter'},
				pager : { type : 'o'  , subType : 'KalturaFilterPager'}
            }
        );
        return result;
    }
}

