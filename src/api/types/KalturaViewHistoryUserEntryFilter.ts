
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaUserEntryExtendedStatus } from './KalturaUserEntryExtendedStatus';
import { KalturaUserEntryFilter, KalturaUserEntryFilterArgs } from './KalturaUserEntryFilter';

export interface KalturaViewHistoryUserEntryFilterArgs  extends KalturaUserEntryFilterArgs {
    extendedStatusEqual? : KalturaUserEntryExtendedStatus;
	extendedStatusIn? : string;
	extendedStatusNotIn? : string;
}


export class KalturaViewHistoryUserEntryFilter extends KalturaUserEntryFilter {

    extendedStatusEqual : KalturaUserEntryExtendedStatus;
	extendedStatusIn : string;
	extendedStatusNotIn : string;

    constructor(data? : KalturaViewHistoryUserEntryFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaViewHistoryUserEntryFilter' },
				extendedStatusEqual : { type : 'es', subTypeConstructor : KalturaUserEntryExtendedStatus, subType : 'KalturaUserEntryExtendedStatus' },
				extendedStatusIn : { type : 's' },
				extendedStatusNotIn : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaViewHistoryUserEntryFilter',KalturaViewHistoryUserEntryFilter);
