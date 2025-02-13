
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaAppRoleArgs  extends KalturaObjectBaseArgs {
    appGuid? : string;
	userRoleId? : number;
}


export class KalturaAppRole extends KalturaObjectBase {

    appGuid : string;
	userRoleId : number;
	readonly createdAt : Date;
	readonly updatedAt : Date;

    constructor(data? : KalturaAppRoleArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAppRole' },
				appGuid : { type : 's' },
				userRoleId : { type : 'n' },
				createdAt : { type : 'd', readOnly : true },
				updatedAt : { type : 'd', readOnly : true }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAppRole',KalturaAppRole);
