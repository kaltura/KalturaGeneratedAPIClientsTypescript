
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAppRole, KalturaAppRoleArgs } from './KalturaAppRole';

export interface KalturaUserAppRoleArgs  extends KalturaAppRoleArgs {
    userId? : string;
}


export class KalturaUserAppRole extends KalturaAppRole {

    userId : string;

    constructor(data? : KalturaUserAppRoleArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUserAppRole' },
				userId : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaUserAppRole',KalturaUserAppRole);
