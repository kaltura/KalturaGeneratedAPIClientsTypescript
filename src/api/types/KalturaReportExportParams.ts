
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaReportExportItem } from './KalturaReportExportItem';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaReportExportParamsArgs  extends KalturaObjectBaseArgs {
    recipientEmail? : string;
	timeZoneOffset? : number;
	reportItems? : KalturaReportExportItem[];
}


export class KalturaReportExportParams extends KalturaObjectBase {

    recipientEmail : string;
	timeZoneOffset : number;
	reportItems : KalturaReportExportItem[];

    constructor(data? : KalturaReportExportParamsArgs)
    {
        super(data);
        if (typeof this.reportItems === 'undefined') this.reportItems = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaReportExportParams' },
				recipientEmail : { type : 's' },
				timeZoneOffset : { type : 'n' },
				reportItems : { type : 'a', subTypeConstructor : KalturaReportExportItem, subType : 'KalturaReportExportItem' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaReportExportParams',KalturaReportExportParams);
