
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaLiveReportOrderBy } from './KalturaLiveReportOrderBy';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaLiveReportInputFilterArgs  extends KalturaObjectBaseArgs {
    entryIds? : string;
	fromTime? : number;
	toTime? : number;
	live? : KalturaNullableBoolean;
	orderBy? : KalturaLiveReportOrderBy;
}


export class KalturaLiveReportInputFilter extends KalturaObjectBase {

    entryIds : string;
	fromTime : number;
	toTime : number;
	live : KalturaNullableBoolean;
	orderBy : KalturaLiveReportOrderBy;

    constructor(data? : KalturaLiveReportInputFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c' , default : 'KalturaLiveReportInputFilter' },
				entryIds : { type : 's'  },
				fromTime : { type : 'n'  },
				toTime : { type : 'n'  },
				live : { type : 'en'  , subType : 'KalturaNullableBoolean'},
				orderBy : { type : 'es'  , subType : 'KalturaLiveReportOrderBy'}
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaLiveReportInputFilter',KalturaLiveReportInputFilter);
