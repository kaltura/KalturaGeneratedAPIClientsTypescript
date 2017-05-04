
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDistributionProfileStatus } from './KalturaDistributionProfileStatus';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaDistributionProfileBaseFilterArgs  extends KalturaFilterArgs {
    idEqual? : number;
	idIn? : string;
	createdAtGreaterThanOrEqual? : number;
	createdAtLessThanOrEqual? : number;
	updatedAtGreaterThanOrEqual? : number;
	updatedAtLessThanOrEqual? : number;
	statusEqual? : KalturaDistributionProfileStatus;
	statusIn? : string;
}


export class KalturaDistributionProfileBaseFilter extends KalturaFilter {

    idEqual : number;
	idIn : string;
	createdAtGreaterThanOrEqual : number;
	createdAtLessThanOrEqual : number;
	updatedAtGreaterThanOrEqual : number;
	updatedAtLessThanOrEqual : number;
	statusEqual : KalturaDistributionProfileStatus;
	statusIn : string;

    constructor(data? : KalturaDistributionProfileBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c' , default : 'KalturaDistributionProfileBaseFilter' },
				idEqual : { type : 'n'  },
				idIn : { type : 's'  },
				createdAtGreaterThanOrEqual : { type : 'n'  },
				createdAtLessThanOrEqual : { type : 'n'  },
				updatedAtGreaterThanOrEqual : { type : 'n'  },
				updatedAtLessThanOrEqual : { type : 'n'  },
				statusEqual : { type : 'en'  , subType : 'KalturaDistributionProfileStatus'},
				statusIn : { type : 's'  }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDistributionProfileBaseFilter',KalturaDistributionProfileBaseFilter);
