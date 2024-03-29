
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaUserType } from './KalturaUserType';
import { KalturaGender } from './KalturaGender';
import { KalturaBaseUser, KalturaBaseUserArgs } from './KalturaBaseUser';

export interface KalturaUserArgs  extends KalturaBaseUserArgs {
    type? : KalturaUserType;
	dateOfBirth? : number;
	gender? : KalturaGender;
	isAdmin? : boolean;
	isGuest? : boolean;
	roleIds? : string;
	isAccountOwner? : boolean;
	password? : string;
	firstName? : string;
	lastName? : string;
	loginEnabled? : boolean;
	registrationInfo? : string;
	attendanceInfo? : string;
	title? : string;
	company? : string;
	ksPrivileges? : string;
	isSsoExcluded? : boolean;
	externalId? : string;
}


export class KalturaUser extends KalturaBaseUser {

    type : KalturaUserType;
	dateOfBirth : number;
	gender : KalturaGender;
	isAdmin : boolean;
	isGuest : boolean;
	roleIds : string;
	readonly roleNames : string;
	isAccountOwner : boolean;
	password : string;
	firstName : string;
	lastName : string;
	loginEnabled : boolean;
	registrationInfo : string;
	attendanceInfo : string;
	title : string;
	company : string;
	ksPrivileges : string;
	readonly encryptedSeed : string;
	isSsoExcluded : boolean;
	externalId : string;

    constructor(data? : KalturaUserArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUser' },
				type : { type : 'en', subTypeConstructor : KalturaUserType, subType : 'KalturaUserType' },
				dateOfBirth : { type : 'n' },
				gender : { type : 'en', subTypeConstructor : KalturaGender, subType : 'KalturaGender' },
				isAdmin : { type : 'b' },
				isGuest : { type : 'b' },
				roleIds : { type : 's' },
				roleNames : { type : 's', readOnly : true },
				isAccountOwner : { type : 'b' },
				password : { type : 's' },
				firstName : { type : 's' },
				lastName : { type : 's' },
				loginEnabled : { type : 'b' },
				registrationInfo : { type : 's' },
				attendanceInfo : { type : 's' },
				title : { type : 's' },
				company : { type : 's' },
				ksPrivileges : { type : 's' },
				encryptedSeed : { type : 's', readOnly : true },
				isSsoExcluded : { type : 'b' },
				externalId : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaUser',KalturaUser);
