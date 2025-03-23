
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaUserEntryExtendedStatus } from './KalturaUserEntryExtendedStatus';
import { KalturaQuizUserEntryBaseFilter, KalturaQuizUserEntryBaseFilterArgs } from './KalturaQuizUserEntryBaseFilter';

export interface KalturaQuizUserEntryFilterArgs  extends KalturaQuizUserEntryBaseFilterArgs {
    extendedStatusEqual? : KalturaUserEntryExtendedStatus;
	extendedStatusIn? : string;
	extendedStatusNotIn? : string;
}


export class KalturaQuizUserEntryFilter extends KalturaQuizUserEntryBaseFilter {

    extendedStatusEqual : KalturaUserEntryExtendedStatus;
	extendedStatusIn : string;
	extendedStatusNotIn : string;

    constructor(data? : KalturaQuizUserEntryFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaQuizUserEntryFilter' },
				extendedStatusEqual : { type : 'es', subTypeConstructor : KalturaUserEntryExtendedStatus, subType : 'KalturaUserEntryExtendedStatus' },
				extendedStatusIn : { type : 's' },
				extendedStatusNotIn : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaQuizUserEntryFilter',KalturaQuizUserEntryFilter);
