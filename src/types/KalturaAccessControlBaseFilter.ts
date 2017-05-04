
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaRelatedFilter, KalturaRelatedFilterArgs } from './KalturaRelatedFilter';

export interface KalturaAccessControlBaseFilterArgs  extends KalturaRelatedFilterArgs {
    idEqual? : number;
	idIn? : string;
	systemNameEqual? : string;
	systemNameIn? : string;
	createdAtGreaterThanOrEqual? : number;
	createdAtLessThanOrEqual? : number;
}


export class KalturaAccessControlBaseFilter extends KalturaRelatedFilter {

    idEqual : number;
	idIn : string;
	systemNameEqual : string;
	systemNameIn : string;
	createdAtGreaterThanOrEqual : number;
	createdAtLessThanOrEqual : number;

    constructor(data? : KalturaAccessControlBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c' , default : 'KalturaAccessControlBaseFilter' },
				idEqual : { type : 'n'  },
				idIn : { type : 's'  },
				systemNameEqual : { type : 's'  },
				systemNameIn : { type : 's'  },
				createdAtGreaterThanOrEqual : { type : 'n'  },
				createdAtLessThanOrEqual : { type : 'n'  }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAccessControlBaseFilter',KalturaAccessControlBaseFilter);
