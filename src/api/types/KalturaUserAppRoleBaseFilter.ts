
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaRelatedFilter, KalturaRelatedFilterArgs } from './KalturaRelatedFilter';

export interface KalturaUserAppRoleBaseFilterArgs  extends KalturaRelatedFilterArgs {
    appGuidEqual? : string;
	appGuidIn? : string;
	userRoleIdEqual? : string;
	userRoleIdIn? : string;
	createdAtLessThanOrEqual? : Date;
	createdAtGreaterThanOrEqual? : Date;
	updatedAtLessThanOrEqual? : Date;
	updatedAtGreaterThanOrEqual? : Date;
}


export class KalturaUserAppRoleBaseFilter extends KalturaRelatedFilter {

    appGuidEqual : string;
	appGuidIn : string;
	userRoleIdEqual : string;
	userRoleIdIn : string;
	createdAtLessThanOrEqual : Date;
	createdAtGreaterThanOrEqual : Date;
	updatedAtLessThanOrEqual : Date;
	updatedAtGreaterThanOrEqual : Date;

    constructor(data? : KalturaUserAppRoleBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUserAppRoleBaseFilter' },
				appGuidEqual : { type : 's' },
				appGuidIn : { type : 's' },
				userRoleIdEqual : { type : 's' },
				userRoleIdIn : { type : 's' },
				createdAtLessThanOrEqual : { type : 'd' },
				createdAtGreaterThanOrEqual : { type : 'd' },
				updatedAtLessThanOrEqual : { type : 'd' },
				updatedAtGreaterThanOrEqual : { type : 'd' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaUserAppRoleBaseFilter',KalturaUserAppRoleBaseFilter);
