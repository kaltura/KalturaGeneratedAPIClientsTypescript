
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaUserEntryBaseFilter, KalturaUserEntryBaseFilterArgs } from './KalturaUserEntryBaseFilter';

export interface KalturaUserEntryFilterArgs  extends KalturaUserEntryBaseFilterArgs {
    userIdEqualCurrent? : KalturaNullableBoolean;
	isAnonymous? : KalturaNullableBoolean;
}


export class KalturaUserEntryFilter extends KalturaUserEntryBaseFilter {

    userIdEqualCurrent : KalturaNullableBoolean;
	isAnonymous : KalturaNullableBoolean;

    constructor(data? : KalturaUserEntryFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c' , default : 'KalturaUserEntryFilter'  },
				userIdEqualCurrent : { type : 'en'   , subType : 'KalturaNullableBoolean'},
				isAnonymous : { type : 'en'   , subType : 'KalturaNullableBoolean'}
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaUserEntryFilter',KalturaUserEntryFilter);
