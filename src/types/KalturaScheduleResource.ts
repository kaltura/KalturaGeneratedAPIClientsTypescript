
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaScheduleResourceStatus } from './KalturaScheduleResourceStatus';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaScheduleResourceArgs  extends KalturaObjectBaseArgs {
    parentId? : number;
	name? : string;
	systemName? : string;
	description? : string;
	tags? : string;
}


export class KalturaScheduleResource extends KalturaObjectBase {

    readonly id : number;
	parentId : number;
	readonly partnerId : number;
	name : string;
	systemName : string;
	description : string;
	readonly status : KalturaScheduleResourceStatus;
	tags : string;
	readonly createdAt : number;
	readonly updatedAt : number;

    constructor(data? : KalturaScheduleResourceArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c' , default : 'KalturaScheduleResource' },
				id : { type : 'n'  , readOnly : true},
				parentId : { type : 'n'  },
				partnerId : { type : 'n'  , readOnly : true},
				name : { type : 's'  },
				systemName : { type : 's'  },
				description : { type : 's'  },
				status : { type : 'en'  , readOnly : true, subType : 'KalturaScheduleResourceStatus'},
				tags : { type : 's'  },
				createdAt : { type : 'n'  , readOnly : true},
				updatedAt : { type : 'n'  , readOnly : true}
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaScheduleResource',KalturaScheduleResource);
