
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveReportExportResponse } from './KalturaLiveReportExportResponse';

import { KalturaLiveReportExportType } from './KalturaLiveReportExportType';
import { KalturaLiveReportExportParams } from './KalturaLiveReportExportParams';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface LiveReportsExportToCsvActionArgs  extends KalturaRequestArgs {
    reportType : KalturaLiveReportExportType;
	params : KalturaLiveReportExportParams;
}


export class LiveReportsExportToCsvAction extends KalturaRequest<KalturaLiveReportExportResponse> {

    reportType : KalturaLiveReportExportType;
	params : KalturaLiveReportExportParams;

    constructor(data : LiveReportsExportToCsvActionArgs)
    {
        super(data, 'o', 'KalturaLiveReportExportResponse');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'livereports' },
				action : { type : 'c' , default : 'exportToCsv' },
				reportType : { type : 'en'  , subType : 'KalturaLiveReportExportType'},
				params : { type : 'o'  , subType : 'KalturaLiveReportExportParams'}
            }
        );
        return result;
    }
}

