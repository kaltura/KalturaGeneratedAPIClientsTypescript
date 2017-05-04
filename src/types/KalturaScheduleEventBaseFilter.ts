
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaScheduleEventStatus } from './KalturaScheduleEventStatus';
import { KalturaScheduleEventRecurrenceType } from './KalturaScheduleEventRecurrenceType';
import { KalturaRelatedFilter, KalturaRelatedFilterArgs } from './KalturaRelatedFilter';

export interface KalturaScheduleEventBaseFilterArgs  extends KalturaRelatedFilterArgs {
    idEqual? : number;
	idIn? : string;
	idNotIn? : string;
	parentIdEqual? : number;
	parentIdIn? : string;
	parentIdNotIn? : string;
	statusEqual? : KalturaScheduleEventStatus;
	statusIn? : string;
	startDateGreaterThanOrEqual? : number;
	startDateLessThanOrEqual? : number;
	endDateGreaterThanOrEqual? : number;
	endDateLessThanOrEqual? : number;
	referenceIdEqual? : string;
	referenceIdIn? : string;
	ownerIdEqual? : string;
	ownerIdIn? : string;
	priorityEqual? : number;
	priorityIn? : string;
	priorityGreaterThanOrEqual? : number;
	priorityLessThanOrEqual? : number;
	recurrenceTypeEqual? : KalturaScheduleEventRecurrenceType;
	recurrenceTypeIn? : string;
	tagsLike? : string;
	tagsMultiLikeOr? : string;
	tagsMultiLikeAnd? : string;
	createdAtGreaterThanOrEqual? : number;
	createdAtLessThanOrEqual? : number;
	updatedAtGreaterThanOrEqual? : number;
	updatedAtLessThanOrEqual? : number;
}


export class KalturaScheduleEventBaseFilter extends KalturaRelatedFilter {

    idEqual : number;
	idIn : string;
	idNotIn : string;
	parentIdEqual : number;
	parentIdIn : string;
	parentIdNotIn : string;
	statusEqual : KalturaScheduleEventStatus;
	statusIn : string;
	startDateGreaterThanOrEqual : number;
	startDateLessThanOrEqual : number;
	endDateGreaterThanOrEqual : number;
	endDateLessThanOrEqual : number;
	referenceIdEqual : string;
	referenceIdIn : string;
	ownerIdEqual : string;
	ownerIdIn : string;
	priorityEqual : number;
	priorityIn : string;
	priorityGreaterThanOrEqual : number;
	priorityLessThanOrEqual : number;
	recurrenceTypeEqual : KalturaScheduleEventRecurrenceType;
	recurrenceTypeIn : string;
	tagsLike : string;
	tagsMultiLikeOr : string;
	tagsMultiLikeAnd : string;
	createdAtGreaterThanOrEqual : number;
	createdAtLessThanOrEqual : number;
	updatedAtGreaterThanOrEqual : number;
	updatedAtLessThanOrEqual : number;

    constructor(data? : KalturaScheduleEventBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c' , default : 'KalturaScheduleEventBaseFilter' },
				idEqual : { type : 'n'  },
				idIn : { type : 's'  },
				idNotIn : { type : 's'  },
				parentIdEqual : { type : 'n'  },
				parentIdIn : { type : 's'  },
				parentIdNotIn : { type : 's'  },
				statusEqual : { type : 'en'  , subType : 'KalturaScheduleEventStatus'},
				statusIn : { type : 's'  },
				startDateGreaterThanOrEqual : { type : 'n'  },
				startDateLessThanOrEqual : { type : 'n'  },
				endDateGreaterThanOrEqual : { type : 'n'  },
				endDateLessThanOrEqual : { type : 'n'  },
				referenceIdEqual : { type : 's'  },
				referenceIdIn : { type : 's'  },
				ownerIdEqual : { type : 's'  },
				ownerIdIn : { type : 's'  },
				priorityEqual : { type : 'n'  },
				priorityIn : { type : 's'  },
				priorityGreaterThanOrEqual : { type : 'n'  },
				priorityLessThanOrEqual : { type : 'n'  },
				recurrenceTypeEqual : { type : 'en'  , subType : 'KalturaScheduleEventRecurrenceType'},
				recurrenceTypeIn : { type : 's'  },
				tagsLike : { type : 's'  },
				tagsMultiLikeOr : { type : 's'  },
				tagsMultiLikeAnd : { type : 's'  },
				createdAtGreaterThanOrEqual : { type : 'n'  },
				createdAtLessThanOrEqual : { type : 'n'  },
				updatedAtGreaterThanOrEqual : { type : 'n'  },
				updatedAtLessThanOrEqual : { type : 'n'  }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaScheduleEventBaseFilter',KalturaScheduleEventBaseFilter);
