
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaUserStatus } from './KalturaUserStatus';
import { KalturaUserAppRoleBaseFilter, KalturaUserAppRoleBaseFilterArgs } from './KalturaUserAppRoleBaseFilter';

export interface KalturaUserAppRoleFilterArgs  extends KalturaUserAppRoleBaseFilterArgs {
    userIdEqual? : string;
	userIdIn? : string;
	userStatusEqual? : KalturaUserStatus;
	userStatusIn? : string;
}


export class KalturaUserAppRoleFilter extends KalturaUserAppRoleBaseFilter {

    userIdEqual : string;
	userIdIn : string;
	userStatusEqual : KalturaUserStatus;
	userStatusIn : string;

    constructor(data? : KalturaUserAppRoleFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUserAppRoleFilter' },
				userIdEqual : { type : 's' },
				userIdIn : { type : 's' },
				userStatusEqual : { type : 'en', subTypeConstructor : KalturaUserStatus, subType : 'KalturaUserStatus' },
				userStatusIn : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaUserAppRoleFilter',KalturaUserAppRoleFilter);
