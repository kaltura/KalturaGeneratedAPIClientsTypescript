
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAppTokenStatus } from './KalturaAppTokenStatus';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaAppTokenBaseFilterArgs  extends KalturaFilterArgs {
    idEqual? : string;
	idIn? : string;
	createdAtGreaterThanOrEqual? : number;
	createdAtLessThanOrEqual? : number;
	updatedAtGreaterThanOrEqual? : number;
	updatedAtLessThanOrEqual? : number;
	statusEqual? : KalturaAppTokenStatus;
	statusIn? : string;
}


export class KalturaAppTokenBaseFilter extends KalturaFilter {

    idEqual : string;
	idIn : string;
	createdAtGreaterThanOrEqual : number;
	createdAtLessThanOrEqual : number;
	updatedAtGreaterThanOrEqual : number;
	updatedAtLessThanOrEqual : number;
	statusEqual : KalturaAppTokenStatus;
	statusIn : string;

    constructor(data? : KalturaAppTokenBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c' , default : 'KalturaAppTokenBaseFilter' },
				idEqual : { type : 's'  },
				idIn : { type : 's'  },
				createdAtGreaterThanOrEqual : { type : 'n'  },
				createdAtLessThanOrEqual : { type : 'n'  },
				updatedAtGreaterThanOrEqual : { type : 'n'  },
				updatedAtLessThanOrEqual : { type : 'n'  },
				statusEqual : { type : 'en'  , subType : 'KalturaAppTokenStatus'},
				statusIn : { type : 's'  }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAppTokenBaseFilter',KalturaAppTokenBaseFilter);
