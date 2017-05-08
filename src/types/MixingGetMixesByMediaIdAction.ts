
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMixEntry } from './KalturaMixEntry';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface MixingGetMixesByMediaIdActionArgs  extends KalturaRequestArgs {
    mediaEntryId : string;
}

/** 
* Get the mixes in which the media entry is included
**/
export class MixingGetMixesByMediaIdAction extends KalturaRequest<KalturaMixEntry[]> {

    mediaEntryId : string;

    constructor(data : MixingGetMixesByMediaIdActionArgs)
    {
        super(data, {responseType : 'a', responseSubType : 'KalturaMixEntry', responseConstructor : KalturaMixEntry  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'mixing'  },
				action : { type : 'c' , default : 'getMixesByMediaId'  },
				mediaEntryId : { type : 's'   }
            }
        );
        return result;
    }
}

