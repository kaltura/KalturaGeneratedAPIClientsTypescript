
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaControlPanelCommandType } from './KalturaControlPanelCommandType';
import { KalturaControlPanelCommandTargetType } from './KalturaControlPanelCommandTargetType';
import { KalturaControlPanelCommandStatus } from './KalturaControlPanelCommandStatus';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaControlPanelCommandBaseFilterArgs  extends KalturaFilterArgs {
    idEqual? : number;
	idIn? : string;
	createdAtGreaterThanOrEqual? : number;
	createdAtLessThanOrEqual? : number;
	createdByIdEqual? : number;
	typeEqual? : KalturaControlPanelCommandType;
	typeIn? : string;
	targetTypeEqual? : KalturaControlPanelCommandTargetType;
	targetTypeIn? : string;
	statusEqual? : KalturaControlPanelCommandStatus;
	statusIn? : string;
}


export class KalturaControlPanelCommandBaseFilter extends KalturaFilter {

    idEqual : number;
	idIn : string;
	createdAtGreaterThanOrEqual : number;
	createdAtLessThanOrEqual : number;
	createdByIdEqual : number;
	typeEqual : KalturaControlPanelCommandType;
	typeIn : string;
	targetTypeEqual : KalturaControlPanelCommandTargetType;
	targetTypeIn : string;
	statusEqual : KalturaControlPanelCommandStatus;
	statusIn : string;

    constructor(data? : KalturaControlPanelCommandBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c' , default : 'KalturaControlPanelCommandBaseFilter' },
				idEqual : { type : 'n'  },
				idIn : { type : 's'  },
				createdAtGreaterThanOrEqual : { type : 'n'  },
				createdAtLessThanOrEqual : { type : 'n'  },
				createdByIdEqual : { type : 'n'  },
				typeEqual : { type : 'en'  , subType : 'KalturaControlPanelCommandType'},
				typeIn : { type : 's'  },
				targetTypeEqual : { type : 'en'  , subType : 'KalturaControlPanelCommandTargetType'},
				targetTypeIn : { type : 's'  },
				statusEqual : { type : 'en'  , subType : 'KalturaControlPanelCommandStatus'},
				statusIn : { type : 's'  }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaControlPanelCommandBaseFilter',KalturaControlPanelCommandBaseFilter);
