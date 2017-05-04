
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaGroupUserStatus } from './KalturaGroupUserStatus';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaGroupUserArgs  extends KalturaObjectBaseArgs {
    userId? : string;
	groupId? : string;
}


export class KalturaGroupUser extends KalturaObjectBase {

    userId : string;
	groupId : string;
	readonly status : KalturaGroupUserStatus;
	readonly partnerId : number;
	readonly createdAt : number;
	readonly updatedAt : number;

    constructor(data? : KalturaGroupUserArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c' , default : 'KalturaGroupUser' },
				userId : { type : 's'  },
				groupId : { type : 's'  },
				status : { type : 'en'  , readOnly : true, subType : 'KalturaGroupUserStatus'},
				partnerId : { type : 'n'  , readOnly : true},
				createdAt : { type : 'n'  , readOnly : true},
				updatedAt : { type : 'n'  , readOnly : true}
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaGroupUser',KalturaGroupUser);
