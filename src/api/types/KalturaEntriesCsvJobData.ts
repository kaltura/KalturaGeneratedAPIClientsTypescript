
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBaseEntryFilter } from './KalturaBaseEntryFilter';
import { KalturaMappedObjectsCsvJobData, KalturaMappedObjectsCsvJobDataArgs } from './KalturaMappedObjectsCsvJobData';

export interface KalturaEntriesCsvJobDataArgs  extends KalturaMappedObjectsCsvJobDataArgs {
    filter? : KalturaBaseEntryFilter;
}


export class KalturaEntriesCsvJobData extends KalturaMappedObjectsCsvJobData {

    filter : KalturaBaseEntryFilter;

    constructor(data? : KalturaEntriesCsvJobDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaEntriesCsvJobData' },
				filter : { type : 'o', subTypeConstructor : KalturaBaseEntryFilter, subType : 'KalturaBaseEntryFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaEntriesCsvJobData',KalturaEntriesCsvJobData);
