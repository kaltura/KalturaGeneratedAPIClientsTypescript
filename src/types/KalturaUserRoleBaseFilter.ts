
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaUserRoleStatus } from './KalturaUserRoleStatus';
import { KalturaRelatedFilter, KalturaRelatedFilterArgs } from './KalturaRelatedFilter';

export interface KalturaUserRoleBaseFilterArgs  extends KalturaRelatedFilterArgs {
    idEqual? : number;
	idIn? : string;
	nameEqual? : string;
	nameIn? : string;
	systemNameEqual? : string;
	systemNameIn? : string;
	descriptionLike? : string;
	statusEqual? : KalturaUserRoleStatus;
	statusIn? : string;
	partnerIdEqual? : number;
	partnerIdIn? : string;
	tagsMultiLikeOr? : string;
	tagsMultiLikeAnd? : string;
	createdAtGreaterThanOrEqual? : number;
	createdAtLessThanOrEqual? : number;
	updatedAtGreaterThanOrEqual? : number;
	updatedAtLessThanOrEqual? : number;
}


export class KalturaUserRoleBaseFilter extends KalturaRelatedFilter {

    idEqual : number;
	idIn : string;
	nameEqual : string;
	nameIn : string;
	systemNameEqual : string;
	systemNameIn : string;
	descriptionLike : string;
	statusEqual : KalturaUserRoleStatus;
	statusIn : string;
	partnerIdEqual : number;
	partnerIdIn : string;
	tagsMultiLikeOr : string;
	tagsMultiLikeAnd : string;
	createdAtGreaterThanOrEqual : number;
	createdAtLessThanOrEqual : number;
	updatedAtGreaterThanOrEqual : number;
	updatedAtLessThanOrEqual : number;

    constructor(data? : KalturaUserRoleBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c' , default : 'KalturaUserRoleBaseFilter' },
				idEqual : { type : 'n'  },
				idIn : { type : 's'  },
				nameEqual : { type : 's'  },
				nameIn : { type : 's'  },
				systemNameEqual : { type : 's'  },
				systemNameIn : { type : 's'  },
				descriptionLike : { type : 's'  },
				statusEqual : { type : 'en'  , subType : 'KalturaUserRoleStatus'},
				statusIn : { type : 's'  },
				partnerIdEqual : { type : 'n'  },
				partnerIdIn : { type : 's'  },
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

KalturaTypesFactory.registerType('KalturaUserRoleBaseFilter',KalturaUserRoleBaseFilter);
