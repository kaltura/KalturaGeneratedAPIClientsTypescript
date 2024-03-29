
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaUserFilter } from './KalturaUserFilter';
import { KalturaMappedObjectsCsvJobData, KalturaMappedObjectsCsvJobDataArgs } from './KalturaMappedObjectsCsvJobData';

export interface KalturaUsersCsvJobDataArgs  extends KalturaMappedObjectsCsvJobDataArgs {
    filter? : KalturaUserFilter;
}


export class KalturaUsersCsvJobData extends KalturaMappedObjectsCsvJobData {

    filter : KalturaUserFilter;

    constructor(data? : KalturaUsersCsvJobDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUsersCsvJobData' },
				filter : { type : 'o', subTypeConstructor : KalturaUserFilter, subType : 'KalturaUserFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaUsersCsvJobData',KalturaUsersCsvJobData);
