
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaUserAppRole } from './KalturaUserAppRole';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaUserAppRoleListResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaUserAppRoleListResponse extends KalturaListResponse {

    readonly objects : KalturaUserAppRole[];

    constructor(data? : KalturaUserAppRoleListResponseArgs)
    {
        super(data);
        if (typeof this.objects === 'undefined') this.objects = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUserAppRoleListResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaUserAppRole, subType : 'KalturaUserAppRole' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaUserAppRoleListResponse',KalturaUserAppRoleListResponse);
