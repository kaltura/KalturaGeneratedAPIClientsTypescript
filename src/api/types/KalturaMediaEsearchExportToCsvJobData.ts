
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaESearchEntryParams } from './KalturaESearchEntryParams';
import { KalturaExportCsvJobData, KalturaExportCsvJobDataArgs } from './KalturaExportCsvJobData';

export interface KalturaMediaEsearchExportToCsvJobDataArgs  extends KalturaExportCsvJobDataArgs {
    searchParams? : KalturaESearchEntryParams;
}


export class KalturaMediaEsearchExportToCsvJobData extends KalturaExportCsvJobData {

    searchParams : KalturaESearchEntryParams;

    constructor(data? : KalturaMediaEsearchExportToCsvJobDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaMediaEsearchExportToCsvJobData' },
				searchParams : { type : 'o', subTypeConstructor : KalturaESearchEntryParams, subType : 'KalturaESearchEntryParams' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaMediaEsearchExportToCsvJobData',KalturaMediaEsearchExportToCsvJobData);
