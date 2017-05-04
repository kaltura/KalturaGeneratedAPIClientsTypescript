
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCuePointType } from './KalturaCuePointType';
import { KalturaCuePointStatus } from './KalturaCuePointStatus';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaRelatedFilter, KalturaRelatedFilterArgs } from './KalturaRelatedFilter';

export interface KalturaCuePointBaseFilterArgs  extends KalturaRelatedFilterArgs {
    idEqual? : string;
	idIn? : string;
	cuePointTypeEqual? : KalturaCuePointType;
	cuePointTypeIn? : string;
	statusEqual? : KalturaCuePointStatus;
	statusIn? : string;
	entryIdEqual? : string;
	entryIdIn? : string;
	createdAtGreaterThanOrEqual? : number;
	createdAtLessThanOrEqual? : number;
	updatedAtGreaterThanOrEqual? : number;
	updatedAtLessThanOrEqual? : number;
	triggeredAtGreaterThanOrEqual? : number;
	triggeredAtLessThanOrEqual? : number;
	tagsLike? : string;
	tagsMultiLikeOr? : string;
	tagsMultiLikeAnd? : string;
	startTimeGreaterThanOrEqual? : number;
	startTimeLessThanOrEqual? : number;
	userIdEqual? : string;
	userIdIn? : string;
	partnerSortValueEqual? : number;
	partnerSortValueIn? : string;
	partnerSortValueGreaterThanOrEqual? : number;
	partnerSortValueLessThanOrEqual? : number;
	forceStopEqual? : KalturaNullableBoolean;
	systemNameEqual? : string;
	systemNameIn? : string;
}


export class KalturaCuePointBaseFilter extends KalturaRelatedFilter {

    idEqual : string;
	idIn : string;
	cuePointTypeEqual : KalturaCuePointType;
	cuePointTypeIn : string;
	statusEqual : KalturaCuePointStatus;
	statusIn : string;
	entryIdEqual : string;
	entryIdIn : string;
	createdAtGreaterThanOrEqual : number;
	createdAtLessThanOrEqual : number;
	updatedAtGreaterThanOrEqual : number;
	updatedAtLessThanOrEqual : number;
	triggeredAtGreaterThanOrEqual : number;
	triggeredAtLessThanOrEqual : number;
	tagsLike : string;
	tagsMultiLikeOr : string;
	tagsMultiLikeAnd : string;
	startTimeGreaterThanOrEqual : number;
	startTimeLessThanOrEqual : number;
	userIdEqual : string;
	userIdIn : string;
	partnerSortValueEqual : number;
	partnerSortValueIn : string;
	partnerSortValueGreaterThanOrEqual : number;
	partnerSortValueLessThanOrEqual : number;
	forceStopEqual : KalturaNullableBoolean;
	systemNameEqual : string;
	systemNameIn : string;

    constructor(data? : KalturaCuePointBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c' , default : 'KalturaCuePointBaseFilter' },
				idEqual : { type : 's'  },
				idIn : { type : 's'  },
				cuePointTypeEqual : { type : 'es'  , subType : 'KalturaCuePointType'},
				cuePointTypeIn : { type : 's'  },
				statusEqual : { type : 'en'  , subType : 'KalturaCuePointStatus'},
				statusIn : { type : 's'  },
				entryIdEqual : { type : 's'  },
				entryIdIn : { type : 's'  },
				createdAtGreaterThanOrEqual : { type : 'n'  },
				createdAtLessThanOrEqual : { type : 'n'  },
				updatedAtGreaterThanOrEqual : { type : 'n'  },
				updatedAtLessThanOrEqual : { type : 'n'  },
				triggeredAtGreaterThanOrEqual : { type : 'n'  },
				triggeredAtLessThanOrEqual : { type : 'n'  },
				tagsLike : { type : 's'  },
				tagsMultiLikeOr : { type : 's'  },
				tagsMultiLikeAnd : { type : 's'  },
				startTimeGreaterThanOrEqual : { type : 'n'  },
				startTimeLessThanOrEqual : { type : 'n'  },
				userIdEqual : { type : 's'  },
				userIdIn : { type : 's'  },
				partnerSortValueEqual : { type : 'n'  },
				partnerSortValueIn : { type : 's'  },
				partnerSortValueGreaterThanOrEqual : { type : 'n'  },
				partnerSortValueLessThanOrEqual : { type : 'n'  },
				forceStopEqual : { type : 'en'  , subType : 'KalturaNullableBoolean'},
				systemNameEqual : { type : 's'  },
				systemNameIn : { type : 's'  }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCuePointBaseFilter',KalturaCuePointBaseFilter);
