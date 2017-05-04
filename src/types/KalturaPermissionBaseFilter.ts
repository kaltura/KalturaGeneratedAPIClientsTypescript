
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaPermissionType } from './KalturaPermissionType';
import { KalturaPermissionStatus } from './KalturaPermissionStatus';
import { KalturaRelatedFilter, KalturaRelatedFilterArgs } from './KalturaRelatedFilter';

export interface KalturaPermissionBaseFilterArgs  extends KalturaRelatedFilterArgs {
    idEqual? : number;
	idIn? : string;
	typeEqual? : KalturaPermissionType;
	typeIn? : string;
	nameEqual? : string;
	nameIn? : string;
	friendlyNameLike? : string;
	descriptionLike? : string;
	statusEqual? : KalturaPermissionStatus;
	statusIn? : string;
	partnerIdEqual? : number;
	partnerIdIn? : string;
	dependsOnPermissionNamesMultiLikeOr? : string;
	dependsOnPermissionNamesMultiLikeAnd? : string;
	tagsMultiLikeOr? : string;
	tagsMultiLikeAnd? : string;
	createdAtGreaterThanOrEqual? : number;
	createdAtLessThanOrEqual? : number;
	updatedAtGreaterThanOrEqual? : number;
	updatedAtLessThanOrEqual? : number;
}


export class KalturaPermissionBaseFilter extends KalturaRelatedFilter {

    idEqual : number;
	idIn : string;
	typeEqual : KalturaPermissionType;
	typeIn : string;
	nameEqual : string;
	nameIn : string;
	friendlyNameLike : string;
	descriptionLike : string;
	statusEqual : KalturaPermissionStatus;
	statusIn : string;
	partnerIdEqual : number;
	partnerIdIn : string;
	dependsOnPermissionNamesMultiLikeOr : string;
	dependsOnPermissionNamesMultiLikeAnd : string;
	tagsMultiLikeOr : string;
	tagsMultiLikeAnd : string;
	createdAtGreaterThanOrEqual : number;
	createdAtLessThanOrEqual : number;
	updatedAtGreaterThanOrEqual : number;
	updatedAtLessThanOrEqual : number;

    constructor(data? : KalturaPermissionBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c' , default : 'KalturaPermissionBaseFilter' },
				idEqual : { type : 'n'  },
				idIn : { type : 's'  },
				typeEqual : { type : 'en'  , subType : 'KalturaPermissionType'},
				typeIn : { type : 's'  },
				nameEqual : { type : 's'  },
				nameIn : { type : 's'  },
				friendlyNameLike : { type : 's'  },
				descriptionLike : { type : 's'  },
				statusEqual : { type : 'en'  , subType : 'KalturaPermissionStatus'},
				statusIn : { type : 's'  },
				partnerIdEqual : { type : 'n'  },
				partnerIdIn : { type : 's'  },
				dependsOnPermissionNamesMultiLikeOr : { type : 's'  },
				dependsOnPermissionNamesMultiLikeAnd : { type : 's'  },
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

KalturaTypesFactory.registerType('KalturaPermissionBaseFilter',KalturaPermissionBaseFilter);
