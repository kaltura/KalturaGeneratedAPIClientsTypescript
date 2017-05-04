
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaEntryServerNodeStatus } from './KalturaEntryServerNodeStatus';
import { KalturaEntryServerNodeType } from './KalturaEntryServerNodeType';
import { KalturaRelatedFilter, KalturaRelatedFilterArgs } from './KalturaRelatedFilter';

export interface KalturaEntryServerNodeBaseFilterArgs  extends KalturaRelatedFilterArgs {
    entryIdEqual? : string;
	entryIdIn? : string;
	serverNodeIdEqual? : number;
	createdAtGreaterThanOrEqual? : number;
	createdAtLessThanOrEqual? : number;
	updatedAtGreaterThanOrEqual? : number;
	updatedAtLessThanOrEqual? : number;
	statusEqual? : KalturaEntryServerNodeStatus;
	statusIn? : string;
	serverTypeEqual? : KalturaEntryServerNodeType;
}


export class KalturaEntryServerNodeBaseFilter extends KalturaRelatedFilter {

    entryIdEqual : string;
	entryIdIn : string;
	serverNodeIdEqual : number;
	createdAtGreaterThanOrEqual : number;
	createdAtLessThanOrEqual : number;
	updatedAtGreaterThanOrEqual : number;
	updatedAtLessThanOrEqual : number;
	statusEqual : KalturaEntryServerNodeStatus;
	statusIn : string;
	serverTypeEqual : KalturaEntryServerNodeType;

    constructor(data? : KalturaEntryServerNodeBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c' , default : 'KalturaEntryServerNodeBaseFilter' },
				entryIdEqual : { type : 's'  },
				entryIdIn : { type : 's'  },
				serverNodeIdEqual : { type : 'n'  },
				createdAtGreaterThanOrEqual : { type : 'n'  },
				createdAtLessThanOrEqual : { type : 'n'  },
				updatedAtGreaterThanOrEqual : { type : 'n'  },
				updatedAtLessThanOrEqual : { type : 'n'  },
				statusEqual : { type : 'en'  , subType : 'KalturaEntryServerNodeStatus'},
				statusIn : { type : 's'  },
				serverTypeEqual : { type : 'es'  , subType : 'KalturaEntryServerNodeType'}
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaEntryServerNodeBaseFilter',KalturaEntryServerNodeBaseFilter);
