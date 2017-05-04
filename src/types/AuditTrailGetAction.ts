
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAuditTrail } from './KalturaAuditTrail';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AuditTrailGetActionArgs  extends KalturaRequestArgs {
    id : number;
}

/** 
* Retrieve an audit trail object by id
**/
export class AuditTrailGetAction extends KalturaRequest<KalturaAuditTrail> {

    id : number;

    constructor(data : AuditTrailGetActionArgs)
    {
        super(data, 'o', 'KalturaAuditTrail');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'audit_audittrail' },
				action : { type : 'c' , default : 'get' },
				id : { type : 'n'  }
            }
        );
        return result;
    }
}

