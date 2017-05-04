
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaResponseProfileStatus } from './KalturaResponseProfileStatus';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaResponseProfileBaseFilterArgs  extends KalturaFilterArgs {
    idEqual? : number;
	idIn? : string;
	systemNameEqual? : string;
	systemNameIn? : string;
	createdAtGreaterThanOrEqual? : number;
	createdAtLessThanOrEqual? : number;
	updatedAtGreaterThanOrEqual? : number;
	updatedAtLessThanOrEqual? : number;
	statusEqual? : KalturaResponseProfileStatus;
	statusIn? : string;
}


export class KalturaResponseProfileBaseFilter extends KalturaFilter {

    idEqual : number;
	idIn : string;
	systemNameEqual : string;
	systemNameIn : string;
	createdAtGreaterThanOrEqual : number;
	createdAtLessThanOrEqual : number;
	updatedAtGreaterThanOrEqual : number;
	updatedAtLessThanOrEqual : number;
	statusEqual : KalturaResponseProfileStatus;
	statusIn : string;

    constructor(data? : KalturaResponseProfileBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c' , default : 'KalturaResponseProfileBaseFilter' },
				idEqual : { type : 'n'  },
				idIn : { type : 's'  },
				systemNameEqual : { type : 's'  },
				systemNameIn : { type : 's'  },
				createdAtGreaterThanOrEqual : { type : 'n'  },
				createdAtLessThanOrEqual : { type : 'n'  },
				updatedAtGreaterThanOrEqual : { type : 'n'  },
				updatedAtLessThanOrEqual : { type : 'n'  },
				statusEqual : { type : 'en'  , subType : 'KalturaResponseProfileStatus'},
				statusIn : { type : 's'  }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaResponseProfileBaseFilter',KalturaResponseProfileBaseFilter);
