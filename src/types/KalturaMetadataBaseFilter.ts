
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaMetadataObjectType } from './KalturaMetadataObjectType';
import { KalturaMetadataStatus } from './KalturaMetadataStatus';
import { KalturaRelatedFilter, KalturaRelatedFilterArgs } from './KalturaRelatedFilter';

export interface KalturaMetadataBaseFilterArgs  extends KalturaRelatedFilterArgs {
    partnerIdEqual? : number;
	metadataProfileIdEqual? : number;
	metadataProfileIdIn? : string;
	metadataProfileVersionEqual? : number;
	metadataProfileVersionGreaterThanOrEqual? : number;
	metadataProfileVersionLessThanOrEqual? : number;
	metadataObjectTypeEqual? : KalturaMetadataObjectType;
	objectIdEqual? : string;
	objectIdIn? : string;
	versionEqual? : number;
	versionGreaterThanOrEqual? : number;
	versionLessThanOrEqual? : number;
	createdAtGreaterThanOrEqual? : number;
	createdAtLessThanOrEqual? : number;
	updatedAtGreaterThanOrEqual? : number;
	updatedAtLessThanOrEqual? : number;
	statusEqual? : KalturaMetadataStatus;
	statusIn? : string;
}


export class KalturaMetadataBaseFilter extends KalturaRelatedFilter {

    partnerIdEqual : number;
	metadataProfileIdEqual : number;
	metadataProfileIdIn : string;
	metadataProfileVersionEqual : number;
	metadataProfileVersionGreaterThanOrEqual : number;
	metadataProfileVersionLessThanOrEqual : number;
	metadataObjectTypeEqual : KalturaMetadataObjectType;
	objectIdEqual : string;
	objectIdIn : string;
	versionEqual : number;
	versionGreaterThanOrEqual : number;
	versionLessThanOrEqual : number;
	createdAtGreaterThanOrEqual : number;
	createdAtLessThanOrEqual : number;
	updatedAtGreaterThanOrEqual : number;
	updatedAtLessThanOrEqual : number;
	statusEqual : KalturaMetadataStatus;
	statusIn : string;

    constructor(data? : KalturaMetadataBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c' , default : 'KalturaMetadataBaseFilter' },
				partnerIdEqual : { type : 'n'  },
				metadataProfileIdEqual : { type : 'n'  },
				metadataProfileIdIn : { type : 's'  },
				metadataProfileVersionEqual : { type : 'n'  },
				metadataProfileVersionGreaterThanOrEqual : { type : 'n'  },
				metadataProfileVersionLessThanOrEqual : { type : 'n'  },
				metadataObjectTypeEqual : { type : 'es'  , subType : 'KalturaMetadataObjectType'},
				objectIdEqual : { type : 's'  },
				objectIdIn : { type : 's'  },
				versionEqual : { type : 'n'  },
				versionGreaterThanOrEqual : { type : 'n'  },
				versionLessThanOrEqual : { type : 'n'  },
				createdAtGreaterThanOrEqual : { type : 'n'  },
				createdAtLessThanOrEqual : { type : 'n'  },
				updatedAtGreaterThanOrEqual : { type : 'n'  },
				updatedAtLessThanOrEqual : { type : 'n'  },
				statusEqual : { type : 'en'  , subType : 'KalturaMetadataStatus'},
				statusIn : { type : 's'  }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaMetadataBaseFilter',KalturaMetadataBaseFilter);
