
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPartner } from './KalturaPartner';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PartnerRegisterActionArgs  extends KalturaRequestArgs {
    partner : KalturaPartner;
	cmsPassword? : string;
	templatePartnerId? : number;
	silent? : boolean;
}

/** 
* Create a new Partner object
**/
export class PartnerRegisterAction extends KalturaRequest<KalturaPartner> {

    partner : KalturaPartner;
	cmsPassword : string;
	templatePartnerId : number;
	silent : boolean;

    constructor(data : PartnerRegisterActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaPartner', responseConstructor : KalturaPartner  });
        if (typeof this.silent === 'undefined') this.silent = false;
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'partner'  },
				action : { type : 'c' , default : 'register'  },
				partner : { type : 'o'   , fallbackConstructor :  KalturaPartner, subType : 'KalturaPartner'},
				cmsPassword : { type : 's'   },
				templatePartnerId : { type : 'n'   },
				silent : { type : 'b'   }
            }
        );
        return result;
    }
}

