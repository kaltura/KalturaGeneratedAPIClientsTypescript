
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaUserEntryStatus } from './KalturaUserEntryStatus';
import { KalturaJobData, KalturaJobDataArgs } from './KalturaJobData';

export interface KalturaUpdateUserEntriesDataArgs  extends KalturaJobDataArgs {
    oldStatus? : KalturaUserEntryStatus;
	newStatus? : KalturaUserEntryStatus;
}


export class KalturaUpdateUserEntriesData extends KalturaJobData {

    oldStatus : KalturaUserEntryStatus;
	newStatus : KalturaUserEntryStatus;

    constructor(data? : KalturaUpdateUserEntriesDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUpdateUserEntriesData' },
				oldStatus : { type : 'es', subTypeConstructor : KalturaUserEntryStatus, subType : 'KalturaUserEntryStatus' },
				newStatus : { type : 'es', subTypeConstructor : KalturaUserEntryStatus, subType : 'KalturaUserEntryStatus' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaUpdateUserEntriesData',KalturaUpdateUserEntriesData);
