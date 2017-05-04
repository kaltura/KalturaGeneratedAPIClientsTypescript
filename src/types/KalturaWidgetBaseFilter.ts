
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaWidgetBaseFilterArgs  extends KalturaFilterArgs {
    idEqual? : string;
	idIn? : string;
	sourceWidgetIdEqual? : string;
	rootWidgetIdEqual? : string;
	partnerIdEqual? : number;
	entryIdEqual? : string;
	uiConfIdEqual? : number;
	createdAtGreaterThanOrEqual? : number;
	createdAtLessThanOrEqual? : number;
	updatedAtGreaterThanOrEqual? : number;
	updatedAtLessThanOrEqual? : number;
	partnerDataLike? : string;
}


export class KalturaWidgetBaseFilter extends KalturaFilter {

    idEqual : string;
	idIn : string;
	sourceWidgetIdEqual : string;
	rootWidgetIdEqual : string;
	partnerIdEqual : number;
	entryIdEqual : string;
	uiConfIdEqual : number;
	createdAtGreaterThanOrEqual : number;
	createdAtLessThanOrEqual : number;
	updatedAtGreaterThanOrEqual : number;
	updatedAtLessThanOrEqual : number;
	partnerDataLike : string;

    constructor(data? : KalturaWidgetBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c' , default : 'KalturaWidgetBaseFilter' },
				idEqual : { type : 's'  },
				idIn : { type : 's'  },
				sourceWidgetIdEqual : { type : 's'  },
				rootWidgetIdEqual : { type : 's'  },
				partnerIdEqual : { type : 'n'  },
				entryIdEqual : { type : 's'  },
				uiConfIdEqual : { type : 'n'  },
				createdAtGreaterThanOrEqual : { type : 'n'  },
				createdAtLessThanOrEqual : { type : 'n'  },
				updatedAtGreaterThanOrEqual : { type : 'n'  },
				updatedAtLessThanOrEqual : { type : 'n'  },
				partnerDataLike : { type : 's'  }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaWidgetBaseFilter',KalturaWidgetBaseFilter);
