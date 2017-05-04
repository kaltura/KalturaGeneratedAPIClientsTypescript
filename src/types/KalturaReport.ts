
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaReportArgs  extends KalturaObjectBaseArgs {
    partnerId? : number;
	name? : string;
	systemName? : string;
	description? : string;
	query? : string;
}


export class KalturaReport extends KalturaObjectBase {

    readonly id : number;
	partnerId : number;
	name : string;
	systemName : string;
	description : string;
	query : string;
	readonly createdAt : number;
	readonly updatedAt : number;

    constructor(data? : KalturaReportArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c' , default : 'KalturaReport' },
				id : { type : 'n'  , readOnly : true},
				partnerId : { type : 'n'  },
				name : { type : 's'  },
				systemName : { type : 's'  },
				description : { type : 's'  },
				query : { type : 's'  },
				createdAt : { type : 'n'  , readOnly : true},
				updatedAt : { type : 'n'  , readOnly : true}
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaReport',KalturaReport);
