
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaUserEntryStatus } from './KalturaUserEntryStatus';
import { KalturaUserEntryType } from './KalturaUserEntryType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaUserEntryArgs  extends KalturaObjectBaseArgs {
    entryId? : string;
	userId? : string;
}


export class KalturaUserEntry extends KalturaObjectBase {

    readonly id : number;
	entryId : string;
	userId : string;
	readonly partnerId : number;
	readonly status : KalturaUserEntryStatus;
	readonly createdAt : Date;
	readonly updatedAt : Date;
	readonly type : KalturaUserEntryType;

    constructor(data? : KalturaUserEntryArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c' , default : 'KalturaUserEntry'  },
				id : { type : 'n'  , readOnly : true },
				entryId : { type : 's'   },
				userId : { type : 's'   },
				partnerId : { type : 'n'  , readOnly : true },
				status : { type : 'es'  , readOnly : true , subType : 'KalturaUserEntryStatus'},
				createdAt : { type : 'd'  , readOnly : true },
				updatedAt : { type : 'd'  , readOnly : true },
				type : { type : 'es'  , readOnly : true , subType : 'KalturaUserEntryType'}
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaUserEntry',KalturaUserEntry);
