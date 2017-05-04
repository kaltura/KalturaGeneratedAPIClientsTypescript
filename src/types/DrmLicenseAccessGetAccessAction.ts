
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDrmLicenseAccessDetails } from './KalturaDrmLicenseAccessDetails';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DrmLicenseAccessGetAccessActionArgs  extends KalturaRequestArgs {
    entryId : string;
	flavorIds : string;
	referrer : string;
}

/** 
* getAccessAction      input: flavor ids, drmProvider      Get Access Action
**/
export class DrmLicenseAccessGetAccessAction extends KalturaRequest<KalturaDrmLicenseAccessDetails> {

    entryId : string;
	flavorIds : string;
	referrer : string;

    constructor(data : DrmLicenseAccessGetAccessActionArgs)
    {
        super(data, 'o', 'KalturaDrmLicenseAccessDetails');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'drm_drmlicenseaccess' },
				action : { type : 'c' , default : 'getAccess' },
				entryId : { type : 's'  },
				flavorIds : { type : 's'  },
				referrer : { type : 's'  }
            }
        );
        return result;
    }
}

