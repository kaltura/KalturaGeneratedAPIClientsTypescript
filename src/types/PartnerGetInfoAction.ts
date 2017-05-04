
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPartner } from './KalturaPartner';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PartnerGetInfoActionArgs  extends KalturaRequestArgs {
    
}

/** 
* Retrieve all info attributed to the partner   This action expects no parameters.
* It returns information for the current KS partnerId.
**/
export class PartnerGetInfoAction extends KalturaRequest<KalturaPartner> {

    

    constructor(data? : PartnerGetInfoActionArgs)
    {
        super(data, 'o', 'KalturaPartner');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'partner' },
				action : { type : 'c' , default : 'getInfo' }
            }
        );
        return result;
    }
}

