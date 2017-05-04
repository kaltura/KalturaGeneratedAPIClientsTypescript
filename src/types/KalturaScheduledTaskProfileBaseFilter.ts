
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaScheduledTaskProfileStatus } from './KalturaScheduledTaskProfileStatus';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaScheduledTaskProfileBaseFilterArgs  extends KalturaFilterArgs {
    idEqual? : number;
	idIn? : string;
	partnerIdEqual? : number;
	partnerIdIn? : string;
	systemNameEqual? : string;
	systemNameIn? : string;
	statusEqual? : KalturaScheduledTaskProfileStatus;
	statusIn? : string;
	createdAtGreaterThanOrEqual? : number;
	createdAtLessThanOrEqual? : number;
	updatedAtGreaterThanOrEqual? : number;
	updatedAtLessThanOrEqual? : number;
	lastExecutionStartedAtGreaterThanOrEqual? : number;
	lastExecutionStartedAtLessThanOrEqual? : number;
}


export class KalturaScheduledTaskProfileBaseFilter extends KalturaFilter {

    idEqual : number;
	idIn : string;
	partnerIdEqual : number;
	partnerIdIn : string;
	systemNameEqual : string;
	systemNameIn : string;
	statusEqual : KalturaScheduledTaskProfileStatus;
	statusIn : string;
	createdAtGreaterThanOrEqual : number;
	createdAtLessThanOrEqual : number;
	updatedAtGreaterThanOrEqual : number;
	updatedAtLessThanOrEqual : number;
	lastExecutionStartedAtGreaterThanOrEqual : number;
	lastExecutionStartedAtLessThanOrEqual : number;

    constructor(data? : KalturaScheduledTaskProfileBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c' , default : 'KalturaScheduledTaskProfileBaseFilter' },
				idEqual : { type : 'n'  },
				idIn : { type : 's'  },
				partnerIdEqual : { type : 'n'  },
				partnerIdIn : { type : 's'  },
				systemNameEqual : { type : 's'  },
				systemNameIn : { type : 's'  },
				statusEqual : { type : 'en'  , subType : 'KalturaScheduledTaskProfileStatus'},
				statusIn : { type : 's'  },
				createdAtGreaterThanOrEqual : { type : 'n'  },
				createdAtLessThanOrEqual : { type : 'n'  },
				updatedAtGreaterThanOrEqual : { type : 'n'  },
				updatedAtLessThanOrEqual : { type : 'n'  },
				lastExecutionStartedAtGreaterThanOrEqual : { type : 'n'  },
				lastExecutionStartedAtLessThanOrEqual : { type : 'n'  }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaScheduledTaskProfileBaseFilter',KalturaScheduledTaskProfileBaseFilter);
