
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaVirusScanProfileStatus } from './KalturaVirusScanProfileStatus';
import { KalturaVirusScanEngineType } from './KalturaVirusScanEngineType';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaVirusScanProfileBaseFilterArgs  extends KalturaFilterArgs {
    idEqual? : number;
	idIn? : string;
	createdAtGreaterThanOrEqual? : number;
	createdAtLessThanOrEqual? : number;
	updatedAtGreaterThanOrEqual? : number;
	updatedAtLessThanOrEqual? : number;
	partnerIdEqual? : number;
	partnerIdIn? : string;
	nameEqual? : string;
	nameLike? : string;
	statusEqual? : KalturaVirusScanProfileStatus;
	statusIn? : string;
	engineTypeEqual? : KalturaVirusScanEngineType;
	engineTypeIn? : string;
}


export class KalturaVirusScanProfileBaseFilter extends KalturaFilter {

    idEqual : number;
	idIn : string;
	createdAtGreaterThanOrEqual : number;
	createdAtLessThanOrEqual : number;
	updatedAtGreaterThanOrEqual : number;
	updatedAtLessThanOrEqual : number;
	partnerIdEqual : number;
	partnerIdIn : string;
	nameEqual : string;
	nameLike : string;
	statusEqual : KalturaVirusScanProfileStatus;
	statusIn : string;
	engineTypeEqual : KalturaVirusScanEngineType;
	engineTypeIn : string;

    constructor(data? : KalturaVirusScanProfileBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c' , default : 'KalturaVirusScanProfileBaseFilter' },
				idEqual : { type : 'n'  },
				idIn : { type : 's'  },
				createdAtGreaterThanOrEqual : { type : 'n'  },
				createdAtLessThanOrEqual : { type : 'n'  },
				updatedAtGreaterThanOrEqual : { type : 'n'  },
				updatedAtLessThanOrEqual : { type : 'n'  },
				partnerIdEqual : { type : 'n'  },
				partnerIdIn : { type : 's'  },
				nameEqual : { type : 's'  },
				nameLike : { type : 's'  },
				statusEqual : { type : 'en'  , subType : 'KalturaVirusScanProfileStatus'},
				statusIn : { type : 's'  },
				engineTypeEqual : { type : 'es'  , subType : 'KalturaVirusScanEngineType'},
				engineTypeIn : { type : 's'  }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaVirusScanProfileBaseFilter',KalturaVirusScanProfileBaseFilter);
