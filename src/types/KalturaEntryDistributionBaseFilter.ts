
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaEntryDistributionStatus } from './KalturaEntryDistributionStatus';
import { KalturaEntryDistributionFlag } from './KalturaEntryDistributionFlag';
import { KalturaRelatedFilter, KalturaRelatedFilterArgs } from './KalturaRelatedFilter';

export interface KalturaEntryDistributionBaseFilterArgs  extends KalturaRelatedFilterArgs {
    idEqual? : number;
	idIn? : string;
	createdAtGreaterThanOrEqual? : number;
	createdAtLessThanOrEqual? : number;
	updatedAtGreaterThanOrEqual? : number;
	updatedAtLessThanOrEqual? : number;
	submittedAtGreaterThanOrEqual? : number;
	submittedAtLessThanOrEqual? : number;
	entryIdEqual? : string;
	entryIdIn? : string;
	distributionProfileIdEqual? : number;
	distributionProfileIdIn? : string;
	statusEqual? : KalturaEntryDistributionStatus;
	statusIn? : string;
	dirtyStatusEqual? : KalturaEntryDistributionFlag;
	dirtyStatusIn? : string;
	sunriseGreaterThanOrEqual? : number;
	sunriseLessThanOrEqual? : number;
	sunsetGreaterThanOrEqual? : number;
	sunsetLessThanOrEqual? : number;
}


export class KalturaEntryDistributionBaseFilter extends KalturaRelatedFilter {

    idEqual : number;
	idIn : string;
	createdAtGreaterThanOrEqual : number;
	createdAtLessThanOrEqual : number;
	updatedAtGreaterThanOrEqual : number;
	updatedAtLessThanOrEqual : number;
	submittedAtGreaterThanOrEqual : number;
	submittedAtLessThanOrEqual : number;
	entryIdEqual : string;
	entryIdIn : string;
	distributionProfileIdEqual : number;
	distributionProfileIdIn : string;
	statusEqual : KalturaEntryDistributionStatus;
	statusIn : string;
	dirtyStatusEqual : KalturaEntryDistributionFlag;
	dirtyStatusIn : string;
	sunriseGreaterThanOrEqual : number;
	sunriseLessThanOrEqual : number;
	sunsetGreaterThanOrEqual : number;
	sunsetLessThanOrEqual : number;

    constructor(data? : KalturaEntryDistributionBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c' , default : 'KalturaEntryDistributionBaseFilter' },
				idEqual : { type : 'n'  },
				idIn : { type : 's'  },
				createdAtGreaterThanOrEqual : { type : 'n'  },
				createdAtLessThanOrEqual : { type : 'n'  },
				updatedAtGreaterThanOrEqual : { type : 'n'  },
				updatedAtLessThanOrEqual : { type : 'n'  },
				submittedAtGreaterThanOrEqual : { type : 'n'  },
				submittedAtLessThanOrEqual : { type : 'n'  },
				entryIdEqual : { type : 's'  },
				entryIdIn : { type : 's'  },
				distributionProfileIdEqual : { type : 'n'  },
				distributionProfileIdIn : { type : 's'  },
				statusEqual : { type : 'en'  , subType : 'KalturaEntryDistributionStatus'},
				statusIn : { type : 's'  },
				dirtyStatusEqual : { type : 'en'  , subType : 'KalturaEntryDistributionFlag'},
				dirtyStatusIn : { type : 's'  },
				sunriseGreaterThanOrEqual : { type : 'n'  },
				sunriseLessThanOrEqual : { type : 'n'  },
				sunsetGreaterThanOrEqual : { type : 'n'  },
				sunsetLessThanOrEqual : { type : 'n'  }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaEntryDistributionBaseFilter',KalturaEntryDistributionBaseFilter);
