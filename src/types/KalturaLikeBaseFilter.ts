
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaRelatedFilter, KalturaRelatedFilterArgs } from './KalturaRelatedFilter';

export interface KalturaLikeBaseFilterArgs  extends KalturaRelatedFilterArgs {
    entryIdEqual? : string;
	entryIdIn? : string;
	userIdEqual? : string;
	createdAtGreaterThanOrEqual? : number;
	createdAtLessThanOrEqual? : number;
}


export class KalturaLikeBaseFilter extends KalturaRelatedFilter {

    entryIdEqual : string;
	entryIdIn : string;
	userIdEqual : string;
	createdAtGreaterThanOrEqual : number;
	createdAtLessThanOrEqual : number;

    constructor(data? : KalturaLikeBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c' , default : 'KalturaLikeBaseFilter' },
				entryIdEqual : { type : 's'  },
				entryIdIn : { type : 's'  },
				userIdEqual : { type : 's'  },
				createdAtGreaterThanOrEqual : { type : 'n'  },
				createdAtLessThanOrEqual : { type : 'n'  }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaLikeBaseFilter',KalturaLikeBaseFilter);
