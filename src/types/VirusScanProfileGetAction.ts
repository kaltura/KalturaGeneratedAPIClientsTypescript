
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaVirusScanProfile } from './KalturaVirusScanProfile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface VirusScanProfileGetActionArgs  extends KalturaRequestArgs {
    virusScanProfileId : number;
}

/** 
* Retrieve an virus scan profile object by id
**/
export class VirusScanProfileGetAction extends KalturaRequest<KalturaVirusScanProfile> {

    virusScanProfileId : number;

    constructor(data : VirusScanProfileGetActionArgs)
    {
        super(data, 'o', 'KalturaVirusScanProfile');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'virusscan_virusscanprofile' },
				action : { type : 'c' , default : 'get' },
				virusScanProfileId : { type : 'n'  }
            }
        );
        return result;
    }
}

