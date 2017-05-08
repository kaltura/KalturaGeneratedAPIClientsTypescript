
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaRelatedFilter, KalturaRelatedFilterArgs } from './KalturaRelatedFilter';

export interface KalturaAssetParamsBaseFilterArgs  extends KalturaRelatedFilterArgs {
    systemNameEqual? : string;
	systemNameIn? : string;
	isSystemDefaultEqual? : KalturaNullableBoolean;
	tagsEqual? : string;
}


export class KalturaAssetParamsBaseFilter extends KalturaRelatedFilter {

    systemNameEqual : string;
	systemNameIn : string;
	isSystemDefaultEqual : KalturaNullableBoolean;
	tagsEqual : string;

    constructor(data? : KalturaAssetParamsBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c' , default : 'KalturaAssetParamsBaseFilter'  },
				systemNameEqual : { type : 's'   },
				systemNameIn : { type : 's'   },
				isSystemDefaultEqual : { type : 'en'   , subType : 'KalturaNullableBoolean'},
				tagsEqual : { type : 's'   }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAssetParamsBaseFilter',KalturaAssetParamsBaseFilter);
