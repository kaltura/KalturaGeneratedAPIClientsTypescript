
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMediaEntry } from './KalturaMediaEntry';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface MediaUpdateThumbnailActionArgs  extends KalturaRequestArgs {
    entryId : string;
	timeOffset : number;
	flavorParamsId? : number;
}

/** 
* Update media entry thumbnail by a specified time offset (In seconds)   If flavor
* params id not specified, source flavor will be used by default
**/
export class MediaUpdateThumbnailAction extends KalturaRequest<KalturaMediaEntry> {

    entryId : string;
	timeOffset : number;
	flavorParamsId : number;

    constructor(data : MediaUpdateThumbnailActionArgs)
    {
        super(data, 'o', 'KalturaMediaEntry');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'media' },
				action : { type : 'c' , default : 'updateThumbnail' },
				entryId : { type : 's'  },
				timeOffset : { type : 'n'  },
				flavorParamsId : { type : 'n'  }
            }
        );
        return result;
    }
}

