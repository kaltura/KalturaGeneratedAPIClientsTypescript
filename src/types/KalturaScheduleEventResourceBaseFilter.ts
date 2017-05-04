
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaRelatedFilter, KalturaRelatedFilterArgs } from './KalturaRelatedFilter';

export interface KalturaScheduleEventResourceBaseFilterArgs  extends KalturaRelatedFilterArgs {
    eventIdEqual? : number;
	eventIdIn? : string;
	resourceIdEqual? : number;
	resourceIdIn? : string;
	createdAtGreaterThanOrEqual? : number;
	createdAtLessThanOrEqual? : number;
	updatedAtGreaterThanOrEqual? : number;
	updatedAtLessThanOrEqual? : number;
}


export class KalturaScheduleEventResourceBaseFilter extends KalturaRelatedFilter {

    eventIdEqual : number;
	eventIdIn : string;
	resourceIdEqual : number;
	resourceIdIn : string;
	createdAtGreaterThanOrEqual : number;
	createdAtLessThanOrEqual : number;
	updatedAtGreaterThanOrEqual : number;
	updatedAtLessThanOrEqual : number;

    constructor(data? : KalturaScheduleEventResourceBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c' , default : 'KalturaScheduleEventResourceBaseFilter' },
				eventIdEqual : { type : 'n'  },
				eventIdIn : { type : 's'  },
				resourceIdEqual : { type : 'n'  },
				resourceIdIn : { type : 's'  },
				createdAtGreaterThanOrEqual : { type : 'n'  },
				createdAtLessThanOrEqual : { type : 'n'  },
				updatedAtGreaterThanOrEqual : { type : 'n'  },
				updatedAtLessThanOrEqual : { type : 'n'  }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaScheduleEventResourceBaseFilter',KalturaScheduleEventResourceBaseFilter);
