
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaGroupUserStatus } from './KalturaGroupUserStatus';
import { KalturaGroupUserCreationMode } from './KalturaGroupUserCreationMode';
import { KalturaGroupUserRole } from './KalturaGroupUserRole';
import { KalturaGroupType } from './KalturaGroupType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaGroupUserArgs  extends KalturaObjectBaseArgs {
    userId? : string;
	groupId? : string;
	creationMode? : KalturaGroupUserCreationMode;
	userRole? : KalturaGroupUserRole;
}


export class KalturaGroupUser extends KalturaObjectBase {

    readonly id : string;
	userId : string;
	groupId : string;
	readonly status : KalturaGroupUserStatus;
	readonly partnerId : number;
	readonly createdAt : Date;
	readonly updatedAt : Date;
	creationMode : KalturaGroupUserCreationMode;
	userRole : KalturaGroupUserRole;
	readonly groupType : KalturaGroupType;

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
                objectType : { type : 'c', default : 'KalturaGroupUser' },
				id : { type : 's', readOnly : true },
				userId : { type : 's' },
				groupId : { type : 's' },
				status : { type : 'en', readOnly : true, subTypeConstructor : KalturaGroupUserStatus, subType : 'KalturaGroupUserStatus' },
				partnerId : { type : 'n', readOnly : true },
				createdAt : { type : 'd', readOnly : true },
				updatedAt : { type : 'd', readOnly : true },
				creationMode : { type : 'en', subTypeConstructor : KalturaGroupUserCreationMode, subType : 'KalturaGroupUserCreationMode' },
				userRole : { type : 'en', subTypeConstructor : KalturaGroupUserRole, subType : 'KalturaGroupUserRole' },
				groupType : { type : 'en', readOnly : true, subTypeConstructor : KalturaGroupType, subType : 'KalturaGroupType' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaGroupUser',KalturaGroupUser);
