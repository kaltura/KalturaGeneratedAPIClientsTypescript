
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaGroupProcessStatus } from './KalturaGroupProcessStatus';
import { KalturaGroupType } from './KalturaGroupType';
import { KalturaBaseUser, KalturaBaseUserArgs } from './KalturaBaseUser';

export interface KalturaGroupArgs  extends KalturaBaseUserArgs {
    processStatus? : KalturaGroupProcessStatus;
	groupType? : KalturaGroupType;
}


export class KalturaGroup extends KalturaBaseUser {

    readonly membersCount : number;
	processStatus : KalturaGroupProcessStatus;
	groupType : KalturaGroupType;

    constructor(data? : KalturaGroupArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaGroup' },
				membersCount : { type : 'n', readOnly : true },
				processStatus : { type : 'en', subTypeConstructor : KalturaGroupProcessStatus, subType : 'KalturaGroupProcessStatus' },
				groupType : { type : 'en', subTypeConstructor : KalturaGroupType, subType : 'KalturaGroupType' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaGroup',KalturaGroup);
