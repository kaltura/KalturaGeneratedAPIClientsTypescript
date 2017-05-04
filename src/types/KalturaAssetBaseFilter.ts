
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaRelatedFilter, KalturaRelatedFilterArgs } from './KalturaRelatedFilter';

export interface KalturaAssetBaseFilterArgs  extends KalturaRelatedFilterArgs {
    idEqual? : string;
	idIn? : string;
	entryIdEqual? : string;
	entryIdIn? : string;
	partnerIdEqual? : number;
	partnerIdIn? : string;
	sizeGreaterThanOrEqual? : number;
	sizeLessThanOrEqual? : number;
	tagsLike? : string;
	tagsMultiLikeOr? : string;
	tagsMultiLikeAnd? : string;
	createdAtGreaterThanOrEqual? : number;
	createdAtLessThanOrEqual? : number;
	updatedAtGreaterThanOrEqual? : number;
	updatedAtLessThanOrEqual? : number;
	deletedAtGreaterThanOrEqual? : number;
	deletedAtLessThanOrEqual? : number;
}


export class KalturaAssetBaseFilter extends KalturaRelatedFilter {

    idEqual : string;
	idIn : string;
	entryIdEqual : string;
	entryIdIn : string;
	partnerIdEqual : number;
	partnerIdIn : string;
	sizeGreaterThanOrEqual : number;
	sizeLessThanOrEqual : number;
	tagsLike : string;
	tagsMultiLikeOr : string;
	tagsMultiLikeAnd : string;
	createdAtGreaterThanOrEqual : number;
	createdAtLessThanOrEqual : number;
	updatedAtGreaterThanOrEqual : number;
	updatedAtLessThanOrEqual : number;
	deletedAtGreaterThanOrEqual : number;
	deletedAtLessThanOrEqual : number;

    constructor(data? : KalturaAssetBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c' , default : 'KalturaAssetBaseFilter' },
				idEqual : { type : 's'  },
				idIn : { type : 's'  },
				entryIdEqual : { type : 's'  },
				entryIdIn : { type : 's'  },
				partnerIdEqual : { type : 'n'  },
				partnerIdIn : { type : 's'  },
				sizeGreaterThanOrEqual : { type : 'n'  },
				sizeLessThanOrEqual : { type : 'n'  },
				tagsLike : { type : 's'  },
				tagsMultiLikeOr : { type : 's'  },
				tagsMultiLikeAnd : { type : 's'  },
				createdAtGreaterThanOrEqual : { type : 'n'  },
				createdAtLessThanOrEqual : { type : 'n'  },
				updatedAtGreaterThanOrEqual : { type : 'n'  },
				updatedAtLessThanOrEqual : { type : 'n'  },
				deletedAtGreaterThanOrEqual : { type : 'n'  },
				deletedAtLessThanOrEqual : { type : 'n'  }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAssetBaseFilter',KalturaAssetBaseFilter);
