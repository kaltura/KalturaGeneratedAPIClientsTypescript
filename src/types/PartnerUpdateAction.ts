
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPartner } from './KalturaPartner';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PartnerUpdateActionArgs  extends KalturaRequestArgs {
    partner : KalturaPartner;
	allowEmpty? : boolean;
}

/** 
* Update details and settings of an existing partner
**/
export class PartnerUpdateAction extends KalturaRequest<KalturaPartner> {

    partner : KalturaPartner;
	allowEmpty : boolean;

    constructor(data : PartnerUpdateActionArgs)
    {
        super(data, 'o', 'KalturaPartner');
        if (typeof this.allowEmpty === 'undefined') this.allowEmpty = false;
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'partner' },
				action : { type : 'c' , default : 'update' },
				partner : { type : 'o'  , subType : 'KalturaPartner'},
				allowEmpty : { type : 'b'  }
            }
        );
        return result;
    }
}

