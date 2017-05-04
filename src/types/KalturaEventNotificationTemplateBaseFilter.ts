
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaEventNotificationTemplateType } from './KalturaEventNotificationTemplateType';
import { KalturaEventNotificationTemplateStatus } from './KalturaEventNotificationTemplateStatus';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaEventNotificationTemplateBaseFilterArgs  extends KalturaFilterArgs {
    idEqual? : number;
	idIn? : string;
	partnerIdEqual? : number;
	partnerIdIn? : string;
	systemNameEqual? : string;
	systemNameIn? : string;
	typeEqual? : KalturaEventNotificationTemplateType;
	typeIn? : string;
	statusEqual? : KalturaEventNotificationTemplateStatus;
	statusIn? : string;
	createdAtGreaterThanOrEqual? : number;
	createdAtLessThanOrEqual? : number;
	updatedAtGreaterThanOrEqual? : number;
	updatedAtLessThanOrEqual? : number;
}


export class KalturaEventNotificationTemplateBaseFilter extends KalturaFilter {

    idEqual : number;
	idIn : string;
	partnerIdEqual : number;
	partnerIdIn : string;
	systemNameEqual : string;
	systemNameIn : string;
	typeEqual : KalturaEventNotificationTemplateType;
	typeIn : string;
	statusEqual : KalturaEventNotificationTemplateStatus;
	statusIn : string;
	createdAtGreaterThanOrEqual : number;
	createdAtLessThanOrEqual : number;
	updatedAtGreaterThanOrEqual : number;
	updatedAtLessThanOrEqual : number;

    constructor(data? : KalturaEventNotificationTemplateBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c' , default : 'KalturaEventNotificationTemplateBaseFilter' },
				idEqual : { type : 'n'  },
				idIn : { type : 's'  },
				partnerIdEqual : { type : 'n'  },
				partnerIdIn : { type : 's'  },
				systemNameEqual : { type : 's'  },
				systemNameIn : { type : 's'  },
				typeEqual : { type : 'es'  , subType : 'KalturaEventNotificationTemplateType'},
				typeIn : { type : 's'  },
				statusEqual : { type : 'en'  , subType : 'KalturaEventNotificationTemplateStatus'},
				statusIn : { type : 's'  },
				createdAtGreaterThanOrEqual : { type : 'n'  },
				createdAtLessThanOrEqual : { type : 'n'  },
				updatedAtGreaterThanOrEqual : { type : 'n'  },
				updatedAtLessThanOrEqual : { type : 'n'  }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaEventNotificationTemplateBaseFilter',KalturaEventNotificationTemplateBaseFilter);
