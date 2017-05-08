
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPartner } from './KalturaPartner';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PartnerGetActionArgs  extends KalturaRequestArgs {
    id? : number;
}

/** 
* Retrieve partner object by Id
**/
export class PartnerGetAction extends KalturaRequest<KalturaPartner> {

    id : number;

    constructor(data? : PartnerGetActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaPartner', responseConstructor : KalturaPartner  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'partner' },
				action : { type : 'c', default : 'get' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

