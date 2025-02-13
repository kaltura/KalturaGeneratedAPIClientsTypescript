
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaESearchHistoryFilter } from './KalturaESearchHistoryFilter';
import { KalturaExportCsvJobData, KalturaExportCsvJobDataArgs } from './KalturaExportCsvJobData';

export interface KalturaSearchHistoryCsvJobDataArgs  extends KalturaExportCsvJobDataArgs {
    filter? : KalturaESearchHistoryFilter;
}


export class KalturaSearchHistoryCsvJobData extends KalturaExportCsvJobData {

    filter : KalturaESearchHistoryFilter;

    constructor(data? : KalturaSearchHistoryCsvJobDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSearchHistoryCsvJobData' },
				filter : { type : 'o', subTypeConstructor : KalturaESearchHistoryFilter, subType : 'KalturaESearchHistoryFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSearchHistoryCsvJobData',KalturaSearchHistoryCsvJobData);
