
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDrmProfile } from './KalturaDrmProfile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DrmProfileDeleteActionArgs  extends KalturaRequestArgs {
    drmProfileId : number;
}

/** 
* Mark the KalturaDrmProfile object as deleted
**/
export class DrmProfileDeleteAction extends KalturaRequest<KalturaDrmProfile> {

    drmProfileId : number;

    constructor(data : DrmProfileDeleteActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaDrmProfile', responseConstructor : KalturaDrmProfile  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'drm_drmprofile' },
				action : { type : 'c', default : 'delete' },
				drmProfileId : { type : 'n' }
            }
        );
        return result;
    }
}

